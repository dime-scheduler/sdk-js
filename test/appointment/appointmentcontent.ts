import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { AppointmentContent } from '../../dist/models';

import { apiKey } from "../testvars";

describe('AppointmentContent', function () {

    const createItem = () => {
        const item = new AppointmentContent();
        item.sourceApp = "SDKJS";
        item.sourceType = "SDKJS";
        item.appointmentGuid = "d5a0ee8c-9284-455d-b4b4-edf3d96d6967";
        item.subject = "SDKJS";

        return item;
    }

    describe('#importAppointmentContent()', function () {
        it('Should successfully set appointment content', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#setAppointmentContent()', function () {
        it('Should successfully set appointment content', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.appointments.setContent(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});