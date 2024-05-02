import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../src';
import { Job } from '../src/models';

import { apiKey } from "./testvars";

describe('Job', function () {

    const createItem = () => {
        const item = new Job();
        item.SourceApp = "SDKJS";
        item.SourceType = "SDKJS";
        item.JobNo = "SDKJS_001";
        item.ShortDescription = "Item from the JS SDK!";

        return item;
    }

    describe('#importJob()', function () {
        it('Should successfully append job', async () => {

            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createJob()', function () {
        it('Should successfully create item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.jobs.create(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateJob()', function () {
        it('Should successfully update item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.jobs.update(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#deleteJob()', function () {
        it('Should successfully delete item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.jobs.delete(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});