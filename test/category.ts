import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../src';
import { Category } from '../src/models';

import { apiKey } from "./testvars";

describe('Category', function () {

    const createItem = () => {
        const category = new Category();
        category.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

        var words = ['Category 1', 'Category 2', 'Category 3'];
        var word = words[Math.floor(Math.random() * words.length)];
        category.name = word;
        category.displayName = word;

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

    describe('#getAll()', function () {
        it('Should successfully get items', async () => {
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            await client.categories.create(createItem());
            const items = await client.categories.getAll();
            assert.ok(items.length > 0);
        });
    });
});