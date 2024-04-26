import { Command } from 'commander';
import DimeSchedulerClient, { Environment } from 'dimescheduler';
import { Appointment } from 'dimescheduler/models';
const program = new Command();

const collect = (val: any, memo: any[]) => {
    memo.push(val);
    return memo;
}

program
    .requiredOption('-s, --start <startdate>', 'Start date')
    .requiredOption('-e, --end <enddate>', 'End date')
    .requiredOption('-r, --resources <items>', 'Resources', collect, []);

program.parse(process.argv);

const options = program.opts();

const createBall = async (client: DimeSchedulerClient, startDate: string) => {
    const endOfDay = new Date(startDate);
    endOfDay.setDate(endOfDay.getDate() + 1);

    const appointment = new Appointment();
    appointment.resourceNo = options.resources[1];
    appointment.start = startDate;
    appointment.end = endOfDay.toISOString();
    appointment.sourceApp = "PINGPONG";
    appointment.sourceType = "PINGPONG";
    appointment.jobNo = "PINGPONG";
    appointment.taskNo = "PINGPONG";
    appointment.category = "PINGPONG";
    appointment.appointmentGuid = "dbc77ca8-f7b8-4bc7-9877-d63d57a81210";

    await client.import(appointment);
}

const client = new DimeSchedulerClient(Bun.env.DS_API_KEY as string, Environment.Test);

const play = async () => {
    let start = new Date(options.start);
    start.setDate(start.getDate() + 1);

    let end = new Date(options.end);
    end.setDate(end.getDate() - 1);

    const dates = getDateRange(start, end);
    for (const date of dates) {
        await createBall(client, date.toISOString().split('T')[0]);
        await Bun.sleep(500);
    }
}

const getDateRange = (startDate: Date, endDate: Date): Date[] => {
    const dates = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return [...dates, ...dates.slice().reverse()];
}

let iterations = 0;
async function repeatAsyncFunctionSynchronously() {
    let finished = false;
    let result;

    while (!finished) {
        try {
            result = await play();
            iterations++;
            if (iterations > 5)
                finished = true;
        } catch (error) {
            console.error("Error occurred:", error);
            break;
        }
    }
}

repeatAsyncFunctionSynchronously();