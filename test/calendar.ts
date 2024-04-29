import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../dist';

import { apiKey } from "./testvars";

describe('Calendar', function () {
    describe('#getAll()', function () {
        it('Should successfully get items', async () => {
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const items = await client.calendars.getAll();
            assert.ok(items.length > 0);
        });
    });
});