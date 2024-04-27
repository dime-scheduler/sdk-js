import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { AppointmentLocked } from '../../dist/models';

import { apiKey } from "../testvars";

describe('Import', function () {
    describe('#appendAppointmentLocked()', function () {
        it('Should successfully set appointment locked', async () => {
            const item = new AppointmentLocked();
            item.sourceApp = "SDKJS";
            item.sourceType = "SDKJS";
            item.appointmentGuid = "d5a0ee8c-9284-455d-b4b4-edf3d96d6967";
            item.locked = true;

            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});