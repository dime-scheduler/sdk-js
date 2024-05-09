import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../src';
import { ActionUri, UriType } from '../src/models';
import { TestEnvironment } from './testvars';

const apiKey = process.env.API_KEY as string

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
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createActionUri()', function () {
        it('Should successfully create item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.actionUris.create(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateActionUri()', function () {
        it('Should successfully update item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.actionUris.update(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#getActionUri()', function () {
        it('Should successfully get items', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.actionUris.getAll();
            assert.ok(results.length > 0);
        });
    });
});