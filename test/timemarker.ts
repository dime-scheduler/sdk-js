import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../dist';
import { Category, TimeMarker, Pin } from '../dist/models';
import randomWords from 'random-words';

import { apiKey } from "./testvars";

describe('TimeMarker', function () {

    const createItem = () => {

        const timeMarker = new TimeMarker();
        timeMarker.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

        const word = randomWords({
            exactly: 1, wordsPerString: 2, formatter: (word, index) => {
                return index === 0 ? word.slice(0, 1).toUpperCase().concat(word.slice(1)) : word;
            }
        })[0];

        timeMarker.name = word;
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
        });
    });

    describe('#updateTimeMarker()', function () {
        it('Should successfully update item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.timeMarkers.update(item);
        });
    });

    describe('#deleteTimeMarker()', function () {
        it('Should successfully delete item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.timeMarkers.delete(item);
        });
    });
});