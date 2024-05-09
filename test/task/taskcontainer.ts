import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../src';
import { TaskContainer } from '../../src/models';
import { TestEnvironment } from '../testvars';

const apiKey = process.env.API_KEY as string

describe('TaskContainer', function () {
    const createItem = () => {
        const sourceApp = "SDKJS";
        const sourceType = "SDKJS";
        const jobNo = "SDKJS";

        const item = new TaskContainer();
        item.sourceApp = sourceApp;
        item.sourceType = sourceType;
        item.jobNo = jobNo;
        item.taskNo = "SDKJS_001";
        item.name = "SDK JS";

        return item;
    }

    describe('#importTaskContainer()', function () {
        it('Should successfully append task container', async () => {

            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);

            const results = await client.import([item]);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });


    describe('#createTaskContainer()', function () {
        it('Should successfully create item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.tasks.createContainer(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateTaskContainer()', function () {
        it('Should successfully update item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.tasks.updateContainer(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#deleteTaskContainer()', function () {
        it('Should successfully delete item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.tasks.deleteContainer(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});