import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../dist';
import { ActionUri } from '../dist/lib/models';
import UriType from '../dist/lib/models/constants/uritype';

import { apiKey } from "./testvars";

describe('Import', function () {
    describe('#setActionUri()', function () {
        it('Should successfully create action uri', async () => {
            const item = new ActionUri();
            item.uri = "https://google.com";
            item.sourceApp = "SDKJS";
            item.sourceType = "SDKJS";
            item.description = "Hello from SDK JS";
            item.uriType = UriType.Appointment;

            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});