import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../src';
import { Category, TimeMarker, Pin } from '../src/models';
import randomWords from 'random-words';

import { apiKey } from "./testvars";

describe('TimeMarker', function () {

    const createItem = () => {

        const timeMarker = new TimeMarker();
        timeMarker.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        timeMarker.name = "SDK JS";

        return timeMarker;
    }

    describe('#importTimeMarker()', function () {
        it('Should successfully append time marker', async () => {
            const timeMarker = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);

            const results = await client.import(timeMarker);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });


    describe('#createTimeMarker()', function () {
        it('Should successfully create item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.timeMarkers.create(item);

            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateTimeMarker()', function () {
        it('Should successfully update item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.timeMarkers.update(item);

            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#deleteTimeMarker()', function () {
        it('Should successfully delete item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.timeMarkers.delete(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#getTimeMarkers()', function () {
        it('Should successfully get items', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.timeMarkers.getAll();

            assert(results.length > 0);
        });
    });

    describe('#getAll()', function () {
        it('Should successfully get items', async () => {
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            await client.timeMarkers.create(createItem());
            const items = await client.timeMarkers.getAll();
            assert.ok(items.length > 0);
        });
    });
});