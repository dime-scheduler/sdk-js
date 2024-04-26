import { Command } from 'commander';
import DimeSchedulerClient, { Environment } from 'dimescheduler';
import { Appointment, Category, Job, Task } from 'dimescheduler/models';
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
const createBallColor = async (client: DimeSchedulerClient) => {
    const ballColor = new Category();
    ballColor.name = "PINGPONG";
    ballColor.color = "#FF65D4";
    await client.import(ballColor);
}

// Need to create a job and a task for appointments to arrive on the planning board
const createJobTask = async (client: DimeSchedulerClient) => {
    const job = new Job();
    job.SourceApp = "PINGPONG";
    job.SourceType = "PINGPONG";
    job.JobNo = "PINGPONG";
    job.ShortDescription = "PING PONG SAMPLE";
    await client.import(job);

    const task = new Task();
    task.sourceApp = "PINGPONG";
    task.sourceType = "PINGPONG";
    task.jobNo = "PINGPONG";
    task.taskNo = "PINGPONG";
    task.shortDescription = "PING PONG SAMPLE";
    await client.import(task);
}

const createPlayer = async (client: DimeSchedulerClient, date: Date, resourceNo: string) => {
    const start = new Date(date);
    const endOfDay = new Date(date);
    endOfDay.setDate(endOfDay.getDate() + 1);

    const appointment = new Appointment();
    appointment.resourceNo = resourceNo;
    appointment.start = start.toISOString();
    appointment.end = endOfDay.toISOString();
    appointment.sourceApp = "PINGPONG";
    appointment.sourceType = "PINGPONG";
    appointment.jobNo = "PINGPONG";
    appointment.taskNo = "PINGPONG";

    await client.import(appointment);
}

// bun stage -s '2022-04-03' -e '2022-04-09' -r 'ARNOUD' -r 'ASSIA' -r 'ELSEMIEK' -r 'HESSEL'
const client = new DimeSchedulerClient(Bun.env.DS_API_KEY as string, Environment.Test);
await createJobTask(client);
await createBallColor(client);

for (const resource of options.resources) {
    await createPlayer(client, options.start, resource);
    await createPlayer(client, options.end, resource);
}