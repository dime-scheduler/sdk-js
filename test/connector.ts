import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../dist';
import { Connector } from '../dist/models';
import BackOfficeSystemType from '../dist/models/constants/backofficesystemtype';

import { apiKey } from "./testvars";

describe('Connector', function () {

    const createItem = () => {
        const item = new Connector();
        item.name = "SDK JS";
        item.description = "Unit test";
        item.sourceApp = "SDKJS";
        item.uri = "https://google.com";
        item.backOfficeSystem = BackOfficeSystemType.Bc;

        return item;
    }

    describe('#importConnector()', function () {
        it('Should successfully create connector', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createConnector()', function () {
        it('Should successfully create item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.actionUris.create(item);
        });
    });

    describe('#updateConnector()', function () {
        it('Should successfully update item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.actionUris.update(item);
        });
    });

    describe('#deleteConnector()', function () {
        it('Should successfully delete item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.actionUris.delete(item);
        });
    });
});