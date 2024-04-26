import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../dist';
import { Job } from '../dist/lib/models';

import { apiKey } from "./testvars";

describe('Import', function () {
    describe('#appendJob()', function () {
        it('Should successfully append job', async () => {
            const item = new Job();
            item.SourceApp = "SDKJS";
            item.SourceType = "SDKJS";
            item.JobNo = "SDKJS_001";
            item.ShortDescription = "Item from the JS SDK!";

            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});