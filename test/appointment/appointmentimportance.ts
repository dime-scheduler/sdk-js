import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../src';
import { AppointmentImportance } from '../../src/models';

const apiKey = process.env.API_KEY as string
import { Importance } from "../../src/models";
import { TestEnvironment } from '../testvars';

describe('AppointmentImportance', function () {

    const createItem = () => {
        const item = new AppointmentImportance();
        item.sourceApp = "SDKJS";
        item.sourceType = "SDKJS";
        item.appointmentGuid = "d5a0ee8c-9284-455d-b4b4-edf3d96d6967";
        item.importance = Importance.High;

        return item;
    }

    describe('#appendAppointmentImportance()', function () {
        it('Should successfully set appointment importance', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#setAppointmentImportance()', function () {
        it('Should successfully set appointment importance', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.appointments.setImportance(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});