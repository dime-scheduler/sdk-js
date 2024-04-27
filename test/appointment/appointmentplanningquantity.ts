import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { AppointmentPlanningQuantity } from '../../dist/models';

import { apiKey } from "../testvars";

describe('Import', function () {
    describe('#appendAppointmentPlanningQuantity()', function () {
        it('Should successfully set appointment planning quantity', async () => {
            const item = new AppointmentPlanningQuantity();
            item.sourceApp = "SDKJS";
            item.sourceType = "SDKJS";
            item.appointmentGuid = "d5a0ee8c-9284-455d-b4b4-edf3d96d6967";
            item.quantity = 500;

            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});