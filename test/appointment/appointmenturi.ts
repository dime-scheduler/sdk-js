import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../src';
import { Appointment, AppointmentUri } from '../../src/models';

import { apiKey, resourceNo } from "../testvars";

describe('AppointmentUri', function () {

    const createItem = () => {

        const appointment = new Appointment();
        appointment.sourceApp = "SDKJS";
        appointment.sourceType = "SDKJS";
        appointment.subject = "Hello from SDK";
        appointment.body = "...";
        appointment.resourceNo = resourceNo;
        appointment.jobNo = "SDKJS";
        appointment.taskNo = "SDKJS_001";
        appointment.appointmentGuid = "d5a0ee8c-9284-455d-b4b4-edf3d96d6966";
        appointment.useFixedPlanningQuantity = true;

        appointment.start = new Date().toISOString();
        const end = new Date();
        end.setHours(end.getHours() + 2);
        appointment.end = end.toISOString();

        const item = new AppointmentUri();
        item.sourceApp = "SDKJS";
        item.sourceType = "SDKJS";
        item.appointmentGuid = "d5a0ee8c-9284-455d-b4b4-edf3d96d6966";
        item.uri = "https://docs.dimescheduler.com";
        item.description = "Docs";

        return { item, appointment };
    }

    describe('#appendAppointmentUri()', function () {
        it('Should successfully create appointment uri', async () => {

            const { item, appointment } = createItem();

            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const importedAppointment = await client.import(appointment);

            item.appointmentId = importedAppointment?.appointments![0];
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });


    describe('#createAppointmentUri()', function () {
        it('Should successfully create item', async () => {
            const { item } = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
        });
    });

    describe('#updateAppointmentUri()', function () {
        it('Should successfully update item', async () => {
            const { item } = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
        });
    });

    describe('#deleteAppointmentUri()', function () {
        it('Should successfully delete item', async () => {
            const { item } = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
        });
    });
});