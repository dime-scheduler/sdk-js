import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { AppointmentImportance } from '../../dist/models';

import { apiKey } from "../testvars";
import Importance from '../../dist/models/constants/importance';

describe('Import', function () {
    describe('#appendAppointmentImportance()', function () {
        it('Should successfully set appointment importance', async () => {
            const item = new AppointmentImportance();
            item.sourceApp = "SDKJS";
            item.sourceType = "SDKJS";
            item.appointmentGuid = "d5a0ee8c-9284-455d-b4b4-edf3d96d6967";
            item.importance = Importance.High;

            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});