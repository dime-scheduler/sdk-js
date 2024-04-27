import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../dist';
import { Container } from '../dist/models';

import { apiKey } from "./testvars";

describe('Import', function () {
    describe('#container()', function () {
        it('Should successfully create container', async () => {
            const item = new Container();
            item.name = "SDK JS";

            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);

            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});