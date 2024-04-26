import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../dist';
import { Caption } from '../dist/lib/models';

import { apiKey } from "./testvars";

describe('Import', function () {
    describe('#caption()', function () {
        it('Should successfully create caption', async () => {
            const item = new Caption();
            item.context = 6;
            item.language = "de";
            item.sourceTable = "Job"
            item.fieldName = "Category";
            item.text = "Der Category bitte schön!";

            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});