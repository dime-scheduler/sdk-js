import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../src';
import { FilterGroup, FilterValue, TaskFilterValue } from '../../src/models';

import { apiKey } from "../testvars";

describe('TaskFilterValue', function () {

    const createItem = () => {
        const item = new TaskFilterValue();
        item.jobNo = "SDKJS"
        item.taskNo = "SDKJS_001";
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

    describe('#importTaskfiltervalue()', function () {
        it('Should successfully update task filter value', async () => {
            
            const { item, filterGroup, filterValue } = createItem();

            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import([filterGroup, filterValue, item]);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createTaskFilterValue()', function () {
        it('Should successfully create task filter value', async () => {
            const { item, filterGroup, filterValue } = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.tasks.createFilterValue(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateTaskFilterValue()', function () {
        it('Should successfully update task filter value', async () => {
            const { item, filterGroup, filterValue } = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.tasks.updateFilterValue(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#deleteTaskFilterValue()', function () {
        it('Should successfully delete task filter value', async () => {
            const { item, filterGroup, filterValue } = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.tasks.deleteFilterValue(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});