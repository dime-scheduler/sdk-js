import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../dist';
import { FilterGroup, FilterValue } from '../dist/models';

import { apiKey } from "./testvars";

describe('FilterValue', function () {

    const createItem = () => {
        const filterGroup = new FilterGroup();
        filterGroup.name = "Department";

        const filterValue = new FilterValue();
        filterValue.group = "Department";
        filterValue.value = "IT";

        return { filterValue, filterGroup };
    }

    describe('#importFilterValue()', function () {
        it('Should successfully set filter value', async () => {

            const { filterValue, filterGroup } = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);

            const results = await client.import([filterGroup, filterValue]);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createFilterValue()', function () {
        it('Should successfully create item', async () => {
            const { filterValue } = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.filterValues.create(filterValue);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateFilterValue()', function () {
        it('Should successfully update item', async () => {
            const { filterValue } = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.filterValues.update(filterValue);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#deleteFilterValue()', function () {
        it('Should successfully delete item', async () => {
            const { filterValue } = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.filterValues.delete(filterValue);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#getAll()', function () {
        it('Should successfully get items', async () => {
            const client = new DimeSchedulerClient(apiKey, Environment.Test);

            await client.filterValues.create(createItem().filterValue);
            const items = await client.filterValues.getAll();
            assert.ok(items.length > 0);
        });
    });
});