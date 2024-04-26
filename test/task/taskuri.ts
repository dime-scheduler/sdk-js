import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { TaskUri } from '../../dist/lib/models';

import { apiKey } from "../testvars";

describe('Import', function () {
    describe('#taskuri()', function () {
        it('Should successfully set task uri', async () => {
            const sourceApp = "SDKJS";
            const sourceType = "SDKJS";
            const jobNo = "SDKJS";

            const item = new TaskUri();
            item.sourceApp = sourceApp;
            item.sourceType = sourceType;
            item.jobNo = jobNo;
            item.taskNo = "SDKJS_001";
            item.uri = "https://google.com";
            item.description = "Some interesting link";

            const client = new DimeSchedulerClient(apiKey, Environment.Test);

            const results = await client.import([item]);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});