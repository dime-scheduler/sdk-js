import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../src';
import { Appointment, AppointmentContainer } from '../../src/models';

import {  TestEnvironment, resourceNo } from "../testvars";
const apiKey = process.env.API_KEY as string

describe('AppointmentContainer', function () {

    const createItem = () => {
        const item = new AppointmentContainer();
        item.container = "SDK JS";
        item.appointment = "d5a0ee8c-9284-455d-b4b4-edf3d96d6965";

        const appointment = new Appointment();
        appointment.sourceApp = "SDKJS";
        appointment.sourceType = "SDKJS";
        appointment.subject = "Hello from SDK";
        appointment.body = "...";
        appointment.resourceNo = resourceNo;
        appointment.jobNo = "SDKJS";
        appointment.taskNo = "SDKJS_001";
        appointment.appointmentGuid = "d5a0ee8c-9284-455d-b4b4-edf3d96d6965";
        appointment.useFixedPlanningQuantity = true;

        appointment.start = new Date().toISOString();
        const end = new Date();
        end.setHours(end.getHours() + 2);
        appointment.end = end.toISOString();

        return { item, appointment };
    }

    describe('#importAppendAppointmentContainer()', function () {
        it('Should successfully append appointment', async () => {
            const { item, appointment } = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);

            const importedAppointment = await client.import(appointment);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createAppointmentContainer()', function () {
        it('Should successfully create item', async () => {
            const { item, appointment } = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);

            const importedAppointment = await client.import(appointment);
            const results = await client.appointments.createContainer(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateAppointmentContainer()', function () {
        it('Should successfully update item', async () => {
            const { item, appointment } = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);

            const importedAppointment = await client.import(appointment);
            const results = await client.appointments.updateContainer(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#deleteAppointmentContainer()', function () {
        it('Should successfully delete item', async () => {
            const { item, appointment } = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);

            const importedAppointment = await client.import(appointment);
            const results = await client.appointments.deleteContainer(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});