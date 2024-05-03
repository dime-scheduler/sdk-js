import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../src';
import { Container } from '../src/models';

import { apiKey } from "./testvars";

describe('Container', function () {

    const createItem = () => {
        const item = new Container();
        item.name = "SDK JS";
        return item;
    }

    describe('#importContainer()', function () {
        it('Should successfully create container', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);

            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createContainer()', function () {
        it('Should successfully create item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.containers.create(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateContainer()', function () {
        it('Should successfully update item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.containers.update(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#deleteContainer()', function () {
        it('Should successfully delete item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.containers.delete(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#getAll()', function () {
        it('Should successfully get items', async () => {
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            await client.containers.create(createItem());
            const items = await client.containers.getAll();
            assert.ok(items.length > 0);
        });
    });
});