import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../dist';
import { Connector } from '../dist/lib/models';
import BackOfficeSystemType from '../dist/lib/models/constants/backofficesystemtype';

import { apiKey } from "./testvars";

describe('Import', function () {
    describe('#connector()', function () {
        it('Should successfully create connector', async () => {
            const item = new Connector();
            item.name = "SDK JS";
            item.description = "Unit test";
            item.sourceApp = "SDKJS";
            item.uri = "https://google.com";
            item.backOfficeSystem = BackOfficeSystemType.Bc;

            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});