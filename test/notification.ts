import assert from 'assert';
import DimeSchedulerClient, { Environment } from '../dist';
import { Notification } from '../dist/lib/models';
import NotificationType from '../dist/lib/models/constants/notificationtype';

import { apiKey } from "./testvars";

describe('Import', function () {
    describe('#notification()', function () {
        it('Should successfully create notification', async () => {
            const item = new Notification();
            item.type = NotificationType.Warning;
            item.code = "SDKJS";
            item.text = "Hello from SDK JS!";
            item.date = new Date();
            item.sourceApp = "SDKJS";
            item.sourceType = "SDKJS";

            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            const results = await client.import(item);
            assert.ok(results.success, !results.success ? results.message : "");
        });
    });
});