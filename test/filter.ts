import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../dist';
import { FilterGroup, FilterValue } from '../dist/models';

import { apiKey } from "./testvars";

describe('Import', function () {
    describe('#setFilterGroup()', function () {
        it('Should successfully set filter group', async () => {
            const filterGroup = new FilterGroup();
            filterGroup.name = "Department"

            const client = new DimeSchedulerClient(apiKey, Environment.Test);

            const results = await client.import(filterGroup);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#setFilterValue()', function () {
        it('Should successfully set filter value', async () => {
            const filterValue = new FilterValue();
            filterValue.group = "Department";
            filterValue.value = "IT";

            const client = new DimeSchedulerClient(apiKey, Environment.Test);

            const results = await client.import(filterValue);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});