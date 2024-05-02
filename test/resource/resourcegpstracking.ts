import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../src';
import { ResourceGpsTracking } from '../../src/models';

import { apiKey, resourceNo } from "../testvars";

describe('ResourceGpsTracking', function () {

    const createItem = () => {
        const item = new ResourceGpsTracking();
        item.resourceNo = resourceNo;
        item.latitude = 38.432649;
        item.longitude = -0.634456;
        
        return item;
    }

    describe('#importResourcegpstracking()', function () {
        it('Should successfully update actual location', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createResourceResourceGpsTracking()', function () {
        it('Should successfully create resource location', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.resources.createLocation(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateResourceResourceGpsTracking()', function () {
        it('Should successfully update resource location', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.resources.updateLocation(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});