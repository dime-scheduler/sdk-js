import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { TaskContainer } from '../../dist/lib/models';

import { apiKey } from "../testvars";

describe('Import', function () {
    describe('#taskcontainer()', function () {
        it('Should successfully append task container', async () => {
            const sourceApp = "SDKJS";
            const sourceType = "SDKJS";
            const jobNo = "SDKJS";

            const item = new TaskContainer();
            item.sourceApp = sourceApp;
            item.sourceType = sourceType;
            item.jobNo = jobNo;
            item.taskNo = "SDKJS_001";
            item.name = "SDK JS";

            const client = new DimeSchedulerClient(apiKey, Environment.Test);

            const results = await client.import([item]);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});