import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { Job, Task, } from '../../dist/lib/models';

import { apiKey } from "../testvars";

describe('Import', function () {
    describe('#taskcontainer()', function () {
        it('Should successfully append task', async () => {
            const sourceApp = "SDKJS";
            const sourceType = "SDKJS";
            const jobNo = "SDKJS";

            const job = new Job();
            job.SourceApp = sourceApp;
            job.SourceType = sourceType;
            job.JobNo = jobNo;
            job.ShortDescription = "Item from the JS SDK!";
            job.Description = "Item from the JS SDK!";

            const task = new Task();
            task.sourceApp = sourceApp;
            task.sourceType = sourceType;
            task.jobNo = jobNo;
            task.taskNo = "SDKJS_001";
            task.shortDescription = "Item from the JS SDK!";

            const client = new DimeSchedulerClient(apiKey, Environment.Test);

            const results = await client.import([job, task]);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});