import assert from 'assert';
import DimeSchedulerClient from '../../src';
import { Job, Task, } from '../../src/models';
import { TestEnvironment } from '../testvars';

const apiKey = process.env.API_KEY as string

describe('Task', function () {

    const createItem = () => {
        const sourceApp = "SDKJS";
        const sourceType = "SDKJS";
        const jobNo = "SDKJS";

        const job = new Job();
        job.sourceApp = sourceApp;
        job.sourceType = sourceType;
        job.jobNo = jobNo;
        job.shortDescription = "Item from the JS SDK!";
        job.description = "Item from the JS SDK!";

        const task = new Task();
        task.sourceApp = sourceApp;
        task.sourceType = sourceType;
        task.jobNo = jobNo;
        task.taskNo = "SDKJS_001";
        task.shortDescription = "Item from the JS SDK!";

        return { task, job };
    }

    describe('#importTask()', function () {
        it('Should successfully append task', async () => {
            const { task, job } = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);

            const results = await client.import([job, task]);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createTask()', function () {
        it('Should successfully create item', async () => {
            const { task } = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.tasks.create(task);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateTask()', function () {
        it('Should successfully update item', async () => {
            const { task } = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.tasks.update(task);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#deleteTask()', function () {
        it('Should successfully delete item', async () => {
            const { task } = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.tasks.delete(task);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#getTasks()', function () {
        it.only('Should successfully get items', async () => {
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.tasks.getAll();

            console.log(results);
            assert.ok(results.length > 0);
        });
    });
});