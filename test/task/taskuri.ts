import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../src';
import { TaskUri } from '../../src/models';
import { TestEnvironment } from '../testvars';

const apiKey = process.env.API_KEY as string

describe('TaskUri', function () {
    const createItem = () => {
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

        return item;
    }

    describe('#importTaskUri()', function () {
        it('Should successfully set task uri', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.import([item]);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createTaskUri()', function () {
        it('Should successfully create resource filter value', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.tasks.createUri(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateTaskUri()', function () {
        it('Should successfully update resource filter value', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.tasks.updateUri(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});