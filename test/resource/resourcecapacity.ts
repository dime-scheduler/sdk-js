import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { ResourceCapacity } from '../../dist/models';

import { apiKey, resourceNo } from "../testvars";

describe('Import', function () {
    describe('#resourcecapacity()', function () {
        it('Should successfully update resource capacity', async () => {
            const item = new ResourceCapacity();
            item.resourceNo = resourceNo;
            item.date = new Date(2024, 1, 1);
            item.capacityInSeconds = 10;

            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});