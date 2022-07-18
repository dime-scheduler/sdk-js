var assert = require('assert');
var dimescheduler = require('../index');
var randomWords = require('random-words');

var uri = 'https://ds-vnext-test.azurewebsites.net';
var user = 'hendrik@dimescheduler.com';
var pw = 'Admin!1';

describe('Import', function () {
    describe('#appendCategory()', function () {
        it('Should successfully append category', async () => {

            var category = new dimescheduler.Import.Category();
            category.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

            var word = randomWords({
                exactly: 1, wordsPerString: 2, formatter: (word, index) => {
                    return index === 0 ? word.slice(0, 1).toUpperCase().concat(word.slice(1)) : word;
                }
            })[0];

            category.name = word;

            var authn = new dimescheduler.FormsAuthenticator(uri, user, pw);
            var client = new dimescheduler.DimeSchedulerClient(uri, authn);

            var results = await client.import.processAsync(category);
            assert.ok(results.data.Success == true);
        });
    });

    describe('#appendTimeMarker()', function () {
        it('Should successfully append time marker', async () => {

            var timeMarker = new dimescheduler.Import.TimeMarker();
            timeMarker.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

            var word = randomWords({
                exactly: 1, wordsPerString: 2, formatter: (word, index) => {
                    return index === 0 ? word.slice(0, 1).toUpperCase().concat(word.slice(1)) : word;
                }
            })[0];

            timeMarker.name = word;

            var authn = new dimescheduler.FormsAuthenticator(uri, user, pw);
            var client = new dimescheduler.DimeSchedulerClient(uri, authn);

            var results = await client.import.processAsync(timeMarker);
            assert.ok(results.data.Success == true);
        });
    });

    describe('#appendPin()', function () {
        it('Should successfully append pin', async () => {

            var pin = new dimescheduler.Import.Pin();
            pin.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

            var word = randomWords({
                exactly: 1, wordsPerString: 2, formatter: (word, index) => {
                    return index === 0 ? word.slice(0, 1).toUpperCase().concat(word.slice(1)) : word;
                }
            })[0];

            pin.name = word;

            var authn = new dimescheduler.FormsAuthenticator(uri, user, pw);
            var client = new dimescheduler.DimeSchedulerClient(uri, authn);

            var results = await client.import.processAsync(pin);
            assert.ok(results.data.Success == true);
        });
    });
});