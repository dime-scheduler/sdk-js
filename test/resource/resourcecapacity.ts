import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { Category, TimeMarker, Appointment, Pin, Job, Task, ResourceGpsTracking, FilterGroup, FilterValue } from '../../dist/lib/models';
import randomWords from 'random-words';

import { apiKey } from "../testvars";

describe('Import', function () {    
    describe('#resourcecapacity()', function () {
        it('Should successfully update actual location', async () => {
            const location = new ResourceGpsTracking();
            location.resourceNo = "ARNOUD";
            location.latitude = 38.432649;
            location.longitude = -0.634456;

            const client = new DimeSchedulerClient(apiKey, Environment.Test);

            const results = await client.import(location);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});