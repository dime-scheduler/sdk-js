import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { ResourceCalendar } from '../../dist/lib/models';

import { apiKey, resourceNo } from "../testvars";

describe('Import', function () {
    describe('#resourcecalendar()', function () {
        it('Should successfully update resource calendar', async () => {
            const item = new ResourceCalendar();
            item.resourceNo = resourceNo;
            item.code = resourceNo + "_COMP_001";
            item.calendarCode = "COMP";
            item.startDate = new Date(2024, 1, 1);
            item.endDate = new Date(2024, 1, 3);

            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});