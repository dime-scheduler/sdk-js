import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../dist';
import { Category, TimeMarker, Pin } from '../dist/models';
import randomWords from 'random-words';

import { apiKey } from "./testvars";

describe('Category', function () {

    const createItem = () => {
        const category = new Category();
        category.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

        const word = randomWords({
            exactly: 1, wordsPerString: 2, formatter: (word, index) => {
                return index === 0 ? word.slice(0, 1).toUpperCase().concat(word.slice(1)) : word;
            }
        })[0];

        category.name = word;

        return category;
    }

    describe('#appendCategory()', function () {
        it('Should successfully append category', async () => {

            const category = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);

            const results = await client.import(category);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });


    describe('#createCategory()', function () {
        it('Should successfully create item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.categories.create(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateCategory()', function () {
        it('Should successfully update item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.categories.update(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#deleteCategory()', function () {
        it('Should successfully delete item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.categories.delete(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});