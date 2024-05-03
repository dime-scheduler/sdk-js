import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../src';
import { Appointment } from '../../src/models';

import { apiKey, resourceNo } from "../testvars";

describe('Appointment', function () {

    const createItem = () => {
        const appointment = new Appointment();
        appointment.sourceApp = "SDKJS";
        appointment.sourceType = "SDKJS";
        appointment.subject = "Hello from SDK";
        appointment.body = "...";
        appointment.resourceNo = resourceNo;
        appointment.jobNo = "SDKJS";
        appointment.taskNo = "SDKJS_001";
        appointment.appointmentGuid = "d5a0ee8c-9284-455d-b4b4-edf3d96d6967";
        appointment.useFixedPlanningQuantity = true;

        appointment.start = new Date().toISOString();
        const end = new Date();
        end.setHours(end.getHours() + 2);
        appointment.end = end.toISOString();

        return appointment;
    }

    describe('#importAppendAppointment()', function () {
        it('Should successfully append appointment', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createAppointment()', function () {
        it('Should successfully create item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.appointments.create(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateAppointment()', function () {
        it('Should successfully update item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.appointments.update(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#deleteAppointment()', function () {
        it('Should successfully delete item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.appointments.delete(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});