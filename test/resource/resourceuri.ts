import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../dist';
import { ResourceUri } from '../../dist/lib/models';

import { apiKey, resourceNo } from "../testvars";

describe('Import', function () {
    describe('#resourcefiltervalue()', function () {
        it('Should successfully update resource uri', async () => {
            const item = new ResourceUri();
            item.resourceNo = resourceNo;
            item.description = "Docs";
            item.uri = "https://docs.dimescheduler.com";

            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});