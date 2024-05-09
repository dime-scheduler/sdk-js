import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../src';
import { TaskLocked } from '../../src/models';
import { TestEnvironment } from '../testvars';

const apiKey = process.env.API_KEY as string

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
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);

            const results = await client.import([item]);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#setTaskLocked()', function () {
        it('Should successfully set locked task', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.tasks.setLocked(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});