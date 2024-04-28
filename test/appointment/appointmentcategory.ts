import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { AppointmentCategory } from '../../dist/models';

import { apiKey } from "../testvars";

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
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#setAppointmentCategory()', function () {
        it('Should successfully set appointment category', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.appointments.setCategory(item);
        });
    });
});