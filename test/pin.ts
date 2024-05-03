import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../src';
import { Category, TimeMarker, Pin } from '../src/models';

import { apiKey } from "./testvars";

describe('Pin', function () {

    const createItem = () => {
        const pin = new Pin();
        pin.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

        var words = ['Category 1', 'Category 2', 'Category 3'];
        var word = words[Math.floor(Math.random() * words.length)];

        pin.name = word;

        return pin;
    }

    describe('#importPin()', function () {
        it('Should successfully append pin', async () => {
            const pin = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(pin);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createPin()', function () {
        it('Should successfully create item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.pins.create(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updatePin()', function () {
        it('Should successfully update item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.pins.update(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#deletePin()', function () {
        it('Should successfully delete item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.pins.delete(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#getAll()', function () {
        it('Should successfully get items', async () => {
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            await client.pins.create(createItem());
            const items = await client.pins.getAll();
            assert.ok(items.length > 0);
        });
    });
});