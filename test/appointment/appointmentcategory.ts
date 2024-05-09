import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../src';
import { AppointmentCategory } from '../../src/models';
import { TestEnvironment } from '../testvars';

const apiKey = process.env.API_KEY as string

describe('AppointmentCategory', function () {
    const createItem = () => {
        const item = new AppointmentCategory();
        item.sourceApp = "SDKJS";
        item.sourceType = "SDKJS";
        item.appointmentGuid = "d5a0ee8c-9284-455d-b4b4-edf3d96d6967";
        item.category = "SDKJS";

        return item;
    }

    describe('#importAppendAppointmentCategory()', function () {
        it('Should successfully set appointment category', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#setAppointmentCategory()', function () {
        it('Should successfully set appointment category', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.appointments.setCategory(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});