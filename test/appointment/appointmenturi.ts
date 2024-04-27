import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { AppointmentUri } from '../../dist/models';

import { apiKey } from "../testvars";

describe('Import', function () {
    describe('#appendAppointmentUri()', function () {
        it('Should successfully create appointment uri', async () => {
            const item = new AppointmentUri();
            item.sourceApp = "SDKJS";
            item.sourceType = "SDKJS";
            item.appointmentGuid = "d5a0ee8c-9284-455d-b4b4-edf3d96d6967";
            item.uri = "https://docs.dimescheduler.com";
            item.description = "Docs";

            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});