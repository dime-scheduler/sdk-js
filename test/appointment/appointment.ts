import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../src';
import { Appointment } from '../../src/models';

import { TestEnvironment, resourceNo } from "../testvars";
const apiKey = process.env.API_KEY as string

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
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createAppointment()', function () {
        it('Should successfully create item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.appointments.create(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateAppointment()', function () {
        it('Should successfully update item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.appointments.update(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#deleteAppointment()', function () {
        it('Should successfully delete item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.appointments.delete(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#getAppointments()', function () {
        it('Should successfully get items', async () => {
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);

            const start = new Date();

            const oneDay = (1000 * 60 * 60 * 24);
            const end = new Date(start.getTime() + oneDay * 14);

            const results = await client.appointments.getAll(start, end, [8558, 8559, 8560]);
            assert.ok(results.length > 0);
        });
    });
});