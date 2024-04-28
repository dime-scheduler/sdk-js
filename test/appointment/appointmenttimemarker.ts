import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { AppointmentTimeMarker } from '../../dist/models';

import { apiKey } from "../testvars";

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
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#setAppointmentTimeMarker()', function () {
        it('Should successfully set appointment time marker', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.appointments.setTimeMarker(item);
        });
    });
});