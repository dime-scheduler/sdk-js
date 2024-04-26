import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { Category, TimeMarker, Appointment, Pin, Job, Task, ResourceGpsTracking, FilterGroup, FilterValue } from '../../dist/lib/models';
import randomWords from 'random-words';

import { apiKey, resourceNo } from "../testvars";

describe('Import', function () {
    describe('#appendAppointment()', function () {
        it('Should successfully append appointment', async () => {
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

            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(appointment);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});