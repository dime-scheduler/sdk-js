import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { TaskLocked } from '../../dist/models';

import { apiKey } from "../testvars";

describe('TaskLocked', function () {
    const createItem = () => {
        const sourceApp = "SDKJS";
        const sourceType = "SDKJS";
        const jobNo = "SDKJS";

        const item = new TaskLocked();
        item.sourceApp = sourceApp;
        item.sourceType = sourceType;
        item.jobNo = jobNo;
        item.taskNo = "SDKJS_001";
        item.locked = true;

        return item;
    }

    describe('#importTasklocked()', function () {
        it('Should successfully lock task', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);

            const results = await client.import([item]);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#setTaskLocked()', function () {
        it('Should successfully set locked task', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.tasks.setLocked(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});