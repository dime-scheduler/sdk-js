import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../../src';
import { Resource } from '../../src/models';

import { apiKey } from "../testvars";


describe('Resource', function () {
    const createItem = () => {
        const item = new Resource();
        item.resourceNo = "SDKJS_001";
        item.displayName = "SDK JS";
        item.gpsTrackingResourceNo = "1";
        item.bulkCapacity = 1;
        item.bulkPlanning = true;
        item.department = "TEXT";
        item.displayName = "TEXT";
        item.doNotShow = false;
        item.email = "TEXT";
        item.exchangeIntegrationEnabled = true;
        item.fieldServiceEmail = "TEXT";
        item.freeBit1 = true;
        item.freeBit2 = true;
        item.freeBit3 = true;
        item.freeBit4 = true;
        item.freeBit5 = true;
        item.freeDate1 = new Date(2020, 1, 1);
        item.freeDate2 = new Date(2020, 1, 1);
        item.freeDate3 = new Date(2020, 1, 1);
        item.freeDate4 = new Date(2020, 1, 1);
        item.freeDate5 = new Date(2020, 1, 1);
        item.freeDecimal1 = 1;
        item.freeDecimal2 = 2;
        item.freeDecimal3 = 3;
        item.freeDecimal4 = 4;
        item.freeDecimal5 = 5;
        item.freeText1 = "TEXT";
        item.freeText10 = "TEXT";
        item.freeText11 = "TEXT";
        item.freeText12 = "TEXT";
        item.freeText13 = "TEXT";
        item.freeText14 = "TEXT";
        item.freeText15 = "TEXT";
        item.freeText16 = "TEXT";
        item.freeText17 = "TEXT";
        item.freeText18 = "TEXT";
        item.freeText19 = "TEXT";
        item.freeText2 = "TEXT";
        item.freeText20 = "TEXT";
        item.freeText3 = "TEXT";
        item.freeText4 = "TEXT";
        item.freeText5 = "TEXT";
        item.freeText6 = "TEXT";
        item.freeText7 = "TEXT";
        item.freeText8 = "TEXT";
        item.freeText9 = "TEXT";
        item.homeAddress = "TEXT";
        item.homeAddressGeoLat = 1;
        item.homeAddressGeoLong = 2;
        item.homeCity = "TEXT";
        item.homeCountry = "TEXT";
        item.homeCounty = "TEXT";
        item.homeEmail = "TEXT";
        item.homeStreet = "TEXT";
        item.homeStreetNo = "5";
        item.homePhone = "TEXT";
        item.homePostcode = "TEXT";
        item.homeRegion = "TEXT";
        item.homeState = "TEXT";
        item.inServiceFrom = new Date(2020, 1, 1);
        item.inServiceTill = new Date(2020, 1, 1);
        item.mobilePhone = "TEXT";
        item.personalEmail = "TEXT";
        item.phone = "TEXT";
        item.pin = "TEXT";
        item.replacementResource = false;
        item.resourceGpsTrackingEnabled = true;
        item.resourceName = "TEXT";
        item.resourceType = "TEXT";
        item.resourceTypeId = 1;
        item.url1 = "TEXT";
        item.urlDescription1 = "TEXT";
        item.url2 = "TEXT";
        item.urlDescription2 = "TEXT";
        item.url3 = "TEXT";
        item.urlDescription3 = "TEXT";
        item.teamCode = "TEXT";
        item.teamMemberSort = 1;
        item.teamMemberType = "TEXT";
        item.teamName = "TEXT";
        item.teamSort = 1;
        item.teamType = "TEXT";

        return item;
    }

    describe('#importresource()', function () {
        it('Should successfully create or update resource', async () => {

            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createResource()', function () {
        it('Should successfully create resource', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.resources.create(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateResource()', function () {
        it('Should successfully update resource', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.resources.update(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#getAll()', function () {
        it('Should successfully get items', async () => {
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            await client.resources.create(createItem());
            const items = await client.resources.getAll();
            assert.ok(items.length > 0);
        });
    });
});