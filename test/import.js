var assert = require('assert');
var DimeSchedulerClient = require('../lib/dimescheduler');

describe('Import', function () {
    describe('#add()', function () {
        it('should return 2', async () => {

            var client = new DimeSchedulerClient();
            var results = await client.import.processAsync();                             
            assert.ok(results.data.Success == true);
        });
    });
});