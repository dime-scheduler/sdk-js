import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../src';
import { ResourceCapacity } from '../../src/models';

import { apiKey, resourceNo } from "../testvars";

describe('ResourceCapacity', function () {

    const createItem = () => {
        const item = new ResourceCapacity();
        item.resourceNo = resourceNo;
        item.date = new Date(2024, 1, 1);
        item.capacityInSeconds = 10;

        return item;
    }

    describe('#importResourcecapacity()', function () {
        it('Should successfully update resource capacity', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createResourceCapacity()', function () {
        it('Should successfully create resource filter value', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.resources.createCapacity(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateResourceCapacity()', function () {
        it('Should successfully update resource filter value', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.resources.updateCapacity(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});