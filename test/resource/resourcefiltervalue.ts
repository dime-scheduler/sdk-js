import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../src';
import { FilterGroup, FilterValue, ResourceFilterValue } from '../../src/models';

import { apiKey, resourceNo } from "../testvars";

describe('ResourceFilterValue', function () {

    const createItem = () => {
        const item = new ResourceFilterValue();
        item.resourceNo = resourceNo;
        item.sourceApp = "SDKJS";
        item.sourceType = "SDKJS";
        item.filterGroup = "Department";
        item.filterValue = "IT";

        const filterGroup = new FilterGroup();
        filterGroup.name = "Department";

        const filterValue = new FilterValue();
        filterValue.value = "IT";
        filterValue.group = "Department";

        return { item, filterGroup, filterValue}
    }

    describe('#importResourcefiltervalue()', function () {
        it('Should successfully update resource filter value', async () => {
            
            const { item, filterGroup, filterValue } = createItem();

            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import([filterGroup, filterValue, item]);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createResourceFilterValue()', function () {
        it('Should successfully create resource filter value', async () => {
            const { item, filterGroup, filterValue } = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.resources.createFilterValue(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateResourceFilterValue()', function () {
        it('Should successfully update resource filter value', async () => {
            const { item, filterGroup, filterValue } = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.resources.updateFilterValue(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#deleteResourceFilterValue()', function () {
        it('Should successfully delete resource filter value', async () => {
            const { item, filterGroup, filterValue } = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.resources.deleteFilterValue(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});