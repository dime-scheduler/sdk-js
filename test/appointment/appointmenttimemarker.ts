import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../src';
import { AppointmentTimeMarker } from '../../src/models';
import { TestEnvironment } from '../testvars';

const apiKey = process.env.API_KEY as string

describe('AppointmentTimeMarker', function () {

    const createItem = () => {
        const item = new AppointmentTimeMarker();
        item.sourceApp = "SDKJS";
        item.sourceType = "SDKJS";
        item.appointmentGuid = "d5a0ee8c-9284-455d-b4b4-edf3d96d6967";
        item.timeMarker = "SDKJS";

        return item;
    }
    
    describe('#appendAppointmentTimeMarker()', function () {
        it('Should successfully set appointment time marker', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#setAppointmentTimeMarker()', function () {
        it('Should successfully set appointment time marker', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.appointments.createTimeMarker(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});