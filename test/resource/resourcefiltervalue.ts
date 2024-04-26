import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { ResourceFilterValue } from '../../dist/lib/models';

import { apiKey, resourceNo } from "../testvars";

describe('Import', function () {
    describe('#resourcefiltervalue()', function () {
        it('Should successfully update resource filter value', async () => {
            const item = new ResourceFilterValue();
            item.resourceNo = resourceNo;
            item.sourceApp = "SDKJS";
            item.sourceType = "SDKJS";
            item.filterGroup = "Department";
            item.filterValue = "IT";

            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});