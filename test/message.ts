import DimeSchedulerClient, { Environment } from '../src';

import { apiKey } from "./testvars";
import { Severity } from '../src/models/constants/severity';

describe('Message', function () {
    describe('#sendMessage()', function () {
        it('Should successfully send message', async () => {
            const client = new DimeSchedulerClient(apiKey, Environment.Test);
            await client.sendMessage("Hello world!", Severity.Warning);
        });
    });
});