import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../src';
import { ResourceUri } from '../../src/models';

import { apiKey, resourceNo } from "../testvars";

describe('ResourceFilterValue', function () {
    const createItem = () => {
        const item = new ResourceUri();
        item.resourceNo = resourceNo;
        item.description = "Docs";
        item.uri = "https://docs.dimescheduler.com";

        return item;
    }

    describe('#importResourcefiltervalue()', function () {
        it('Should successfully update resource uri', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createResourceUri()', function () {
        it('Should successfully create resource uri', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.resources.createUri(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateResourceUri()', function () {
        it('Should successfully update resource uri', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.resources.updateUri(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#deleteResourceUri()', function () {
        it('Should successfully delete resource uri', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.resources.deleteUri(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});