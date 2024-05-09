import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../src';
import { Appointment } from '../../src/models';

import { TestEnvironment, resourceNo } from "../testvars";
const apiKey = process.env.API_KEY as string

describe('Assignment', function () {
    describe('#appendAppointmentAssignment()', function () {
        it('Should successfully append assignment', async () => {
            const appointment = new Appointment();
            appointment.sourceApp = "SDKJS";
            appointment.sourceType = "SDKJS";
            appointment.subject = "Hello from SDK";
            appointment.body = "...";
            appointment.resourceNo = resourceNo;
            appointment.jobNo = "SDKJS";
            appointment.taskNo = "SDKJS_001";

            appointment.start = new Date().toISOString();
            const end = new Date();
            end.setHours(end.getHours() + 2);
            appointment.end = end.toISOString();

            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.import(appointment);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});