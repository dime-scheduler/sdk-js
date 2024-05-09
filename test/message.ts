import DimeSchedulerClient, { Environment } from '../src';

const apiKey = process.env.API_KEY as string
import { Severity } from '../src/models';
import { TestEnvironment } from './testvars';

describe('Message', function () {
    describe('#sendMessage()', function () {
        it('Should successfully send message', async () => {
            const client = new DimeSchedulerClient(apiKey, TestEnvironment);
            await client.sendMessage("Hello world!", Severity.Warning);
        });
    });
});