import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../dist';
import { Notification } from '../dist/models';
import NotificationType from '../dist/models/constants/notificationtype';

import { apiKey } from "./testvars";

describe('Notification', function () {

    const createItem = () => {
        const item = new Notification();
        item.type = NotificationType.Warning;
        item.code = "SDKJS";
        item.text = "Hello from SDK JS!";
        item.date = new Date();
        item.sourceApp = "SDKJS";
        item.sourceType = "SDKJS";
        return item;
    }

    describe('#importNotification()', function () {
        it('Should successfully create notification', async () => {
            const item = createItem();

            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#createNotification()', function () {
        it('Should successfully create item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.notifications.create(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#updateNotification()', function () {
        it('Should successfully update item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.notifications.update(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });

    describe('#deleteNotification()', function () {
        it('Should successfully delete item', async () => {
            const item = createItem();
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.notifications.delete(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});