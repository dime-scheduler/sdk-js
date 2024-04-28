import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { ResourceCalendar } from '../../dist/models';

import { apiKey, resourceNo } from "../testvars";

describe('ResourceCalendar', function () {
    const createItem = () => {
        const item = new ResourceCalendar();
        item.resourceNo = resourceNo;
        item.code = resourceNo + "_COMP_001";
        item.calendarCode = "COMP";
        item.startDate = new Date(2024, 1, 1);
        item.endDate = new Date(2024, 1, 3);

        return item;
    }

    describe('#importResourcecalendar()', function () {
        it('Should successfully update resource calendar', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createResourceCalendar()', function () {
        it('Should successfully create resource filter value', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.resources.createCalendar(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateResourceCalendar()', function () {
        it('Should successfully update resource filter value', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.resources.updateCalendar(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#deleteResourceCalendar()', function () {
        it('Should successfully update resource filter value', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.resources.deleteCalendar(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});