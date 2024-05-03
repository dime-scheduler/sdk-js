import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../src';
import { AppointmentPlanningQuantity } from '../../src/models';

import { apiKey } from "../testvars";

describe('AppointmentPlanningQuantity', function () {

    const createItem = () => {
        const item = new AppointmentPlanningQuantity();
        item.sourceApp = "SDKJS";
        item.sourceType = "SDKJS";
        item.appointmentGuid = "d5a0ee8c-9284-455d-b4b4-edf3d96d6967";
        item.quantity = 500;

        return item;
    }

    describe('#importAppointmentPlanningQuantity()', function () {
        it('Should successfully set appointment planning quantity', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#setAppointmentPlanningQuantity()', function () {
        it('Should successfully set appointment planning quantity', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.appointments.setPlanningQuantity(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});