import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../dist';
import { FilterGroup, FilterValue } from '../dist/models';

import { apiKey } from "./testvars";

describe('FilterValue', function () {

    const createItem = () => {
        const filterValue = new FilterValue();
        filterValue.group = "Department";
        filterValue.value = "IT";

        return filterValue;
    }

    describe('#importFilterValue()', function () {
        it('Should successfully set filter value', async () => {

            const filterValue = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);

            const results = await client.import(filterValue);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createFilterValue()', function () {
        it('Should successfully create item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.filterValues.create(item);
        });
    });

    describe('#updateFilterValue()', function () {
        it('Should successfully update item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.filterValues.update(item);
        });
    });

    describe('#deleteFilterValue()', function () {
        it('Should successfully delete item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.filterValues.delete(item);
        });
    });
});