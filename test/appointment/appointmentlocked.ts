import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../src';
import { AppointmentLocked } from '../../src/models';

import { apiKey } from "../testvars";

describe('AppointmentLocked', function () {
    
    const createItem = () => {
        const item = new AppointmentLocked();
        item.sourceApp = "SDKJS";
        item.sourceType = "SDKJS";
        item.appointmentGuid = "d5a0ee8c-9284-455d-b4b4-edf3d96d6967";
        item.locked = true;

        return item;
    }

    describe('#appendAppointmentLocked()', function () {
        it('Should successfully set appointment locked', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#setAppointmentLocked()', function () {
        it('Should successfully set appointment lock', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.appointments.setLocked(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});