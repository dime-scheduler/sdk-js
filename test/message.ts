import DimeSchedulerClient, { Environment } from '../dist';

import { apiKey } from "./testvars";
import { Severity } from '../dist/lib/models/constants/severity';

describe('Message', function () {
    describe('#sendMessage()', function () {
        it.only('Should successfully send message', async () => {
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            await client.sendMessage("Hello world!", Severity.Warning);
        });
    });
});