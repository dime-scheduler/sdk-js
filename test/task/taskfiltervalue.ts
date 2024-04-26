import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { TaskFilterValue } from '../../dist/lib/models';

import { apiKey } from "../testvars";

describe('Import', function () {
    describe('#taskfiltervalue()', function () {
        it('Should successfully append task filter value', async () => {
            const sourceApp = "SDKJS";
            const sourceType = "SDKJS";
            const jobNo = "SDKJS";

            const item = new TaskFilterValue();
            item.sourceApp = sourceApp;
            item.sourceType = sourceType;
            item.jobNo = jobNo;
            item.taskNo = "SDKJS_001";
            item.filterGroup = "Department";
            item.filterValue = "IT";

            const client = new DimeSchedulerClient(apiKey, Environment.Test);

            const results = await client.import([item]);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});