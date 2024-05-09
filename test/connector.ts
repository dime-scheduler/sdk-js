import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../src';
import { Connector, BackOfficeSystemType } from '../src/models';
import { TestEnvironment } from './testvars';

const apiKey = process.env.API_KEY as string

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
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createConnector()', function () {
        it('Should successfully create item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.connectors.create(item);
        });
    });
});