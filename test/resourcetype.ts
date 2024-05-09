import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../src';
import { TestEnvironment } from './testvars';

const apiKey = process.env.API_KEY as string

describe('ResourceType', function () {
    describe('#getAll()', function () {
        it('Should successfully get items', async () => {
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const items = await client.resourceTypes.getAll();
            assert.ok(items.length > 0);
        });
    });
});