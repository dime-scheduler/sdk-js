import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { ResourceGpsTracking } from '../../dist/lib/models';

import { apiKey, resourceNo } from "../testvars";

describe('Import', function () {
    describe('#resourcegpstracking()', function () {
        it('Should successfully update actual location', async () => {
            const item = new ResourceGpsTracking();
            item.resourceNo = resourceNo;
            item.latitude = 38.432649;
            item.longitude = -0.634456;

            const client = new DimeSchedulerClient(apiKey, Environment.Test);

            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});