import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../dist';
import { FilterGroup, FilterValue } from '../dist/models';

import { apiKey } from "./testvars";

describe('FilterGroup', function () {
    const createItem = () => {
        const filterGroup = new FilterGroup();
        filterGroup.name = "Department"

        return filterGroup;
    }

    describe('#importFilterGroup()', function () {
        it('Should successfully set filter group', async () => {
            const filterGroup = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);

            const results = await client.import(filterGroup);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createFilterGroup()', function () {
        it('Should successfully create item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.filterGroups.create(item);
        });
    });

    describe('#updateFilterGroup()', function () {
        it('Should successfully update item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.filterGroups.update(item);
        });
    });

    describe('#deleteFilterGroup()', function () {
        it('Should successfully delete item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.filterGroups.delete(item);
        });
    });
});