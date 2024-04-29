import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../dist';

import { apiKey } from "./testvars";

describe('ResourceType', function () {
    describe('#getAll()', function () {
        it('Should successfully get items', async () => {
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const items = await client.resourceTypes.getAll();
            assert.ok(items.length > 0);
        });
    });
});