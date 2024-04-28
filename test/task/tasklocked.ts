import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { TaskLocked } from '../../dist/models';

import { apiKey } from "../testvars";

describe('TaskLocked', function () {
    describe('#tasklocked()', function () {
        it('Should successfully lock task', async () => {
            const sourceApp = "SDKJS";
            const sourceType = "SDKJS";
            const jobNo = "SDKJS";

            const item = new TaskLocked();
            item.sourceApp = sourceApp;
            item.sourceType = sourceType;
            item.jobNo = jobNo;
            item.taskNo = "SDKJS_001";
            item.locked = true;

            const client = new DimeSchedulerClient(apiKey, Environment.Test);

            const results = await client.import([item]);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});