import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../src';
import { Connector } from '../src/models';
import BackOfficeSystemType from '../src/models/constants/backofficesystemtype';

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
            const results = await client.connectors.create(item);
        });
    });
});