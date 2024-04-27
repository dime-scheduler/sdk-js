import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../dist';
import { Category, TimeMarker, Pin } from '../dist/models';
import randomWords from 'random-words';

import { apiKey } from "./testvars";

describe('Import', function () {
    describe('#appendCategory()', function () {
        it('Should successfully append category', async () => {

            const category = new Category();
            category.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

            const word = randomWords({
                exactly: 1, wordsPerString: 2, formatter: (word, index) => {
                    return index === 0 ? word.slice(0, 1).toUpperCase().concat(word.slice(1)) : word;
                }
            })[0];

            category.name = word;

            const client = new DimeSchedulerClient(apiKey, Environment.Test);

            const results = await client.import(category);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#appendTimeMarker()', function () {
        it('Should successfully append time marker', async () => {

            const timeMarker = new TimeMarker();
            timeMarker.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

            const word = randomWords({
                exactly: 1, wordsPerString: 2, formatter: (word, index) => {
                    return index === 0 ? word.slice(0, 1).toUpperCase().concat(word.slice(1)) : word;
                }
            })[0];

            timeMarker.name = word;

            const client = new DimeSchedulerClient(apiKey, Environment.Test);

            const results = await client.import(timeMarker);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#appendPin()', function () {
        it('Should successfully append pin', async () => {

            const pin = new Pin();
            pin.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

            const word = randomWords({
                exactly: 1, wordsPerString: 2, formatter: (word, index) => {
                    return index === 0 ? word.slice(0, 1).toUpperCase().concat(word.slice(1)) : word;
                }
            })[0];

            pin.name = word;

            const client = new DimeSchedulerClient(apiKey, Environment.Test);

            const results = await client.import(pin);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});