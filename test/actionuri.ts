import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../dist';
import { ActionUri } from '../dist/models';
import UriType from '../dist/models/constants/uritype';

import { apiKey } from "./testvars";

describe('Action URI', function () {

    const createItem = () => {
        const item = new ActionUri();
        item.uri = "https://google.com";
        item.sourceApp = "SDKJS";
        item.sourceType = "SDKJS";
        item.description = "Hello from SDK JS";
        item.uriType = UriType.Appointment;

        return item;
    }

    describe('#importActionUri()', function () {
        it('Should successfully create action uri', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createActionUri()', function () {
        it('Should successfully create item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.actionUris.create(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateActionUri()', function () {
        it('Should successfully update item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.actionUris.update(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#deleteActionUri()', function () {
        it('Should successfully delete item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.actionUris.delete(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});