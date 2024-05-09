import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../src';
import { Caption } from '../src/models';
import { TestEnvironment } from './testvars';

const apiKey = process.env.API_KEY as string

describe('Caption', function () {
    const createItem = () => {
        const item = new Caption();
        item.context = 6;
        item.language = "de";
        item.sourceTable = "Job"
        item.fieldName = "Category";
        item.text = "Der Category bitte schön!";

        return item;
    }

    describe('#importCaption()', function () {
        it('Should successfully create caption', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createConnector()', function () {
        it('Should successfully create item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.captions.create(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateConnector()', function () {
        it('Should successfully update item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            const results = await client.captions.update(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});