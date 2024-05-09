import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../src';
import { TestEnvironment } from './testvars';

const apiKey = process.env.API_KEY as string

describe('Calendar', function () {
    describe('#getAll()', function () {
        it('Should successfully get items', async () => {
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const items = await client.calendars.getAll();
            assert.ok(items.length > 0);
        });
    });
});