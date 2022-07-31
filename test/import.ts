import assert from 'assert';
import * as dimescheduler from '../dist/esm';
import randomWords from 'random-words';

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

    describe('#appendAppointment()', function () {
        it('Should successfully append appointment', async () => {
            var appointment = new dimescheduler.Import.Appointment();
            appointment.SourceApp = "POWERAPPS";
            appointment.SourceType = "POWERAPPS";
            appointment.Subject = "Hello from SDK";
            appointment.Body = "...";
            appointment.ResourceNo = "Hendrik (Mobile)";
            appointment.JobNo = "POWERAPP_001";
            appointment.TaskNo = "SDK_TEST_001";
           
            appointment.Start = new Date().toISOString();
            var end = new Date();
            end.setHours(end.getHours() + 2);
            appointment.End = end.toISOString();

            var authn = new dimescheduler.FormsAuthenticator(uri, user, pw);
            var client = new dimescheduler.DimeSchedulerClient(uri, authn);
            var results = await client.import.processAsync(appointment);
            assert.ok(results.data.Success == true);
        });
    });

    describe('#appendJob()', function () {
        it('Should successfully append job', async () => {
            var item = new dimescheduler.Import.Job();
            item.SourceApp = "POWERAPPS";
            item.SourceType = "POWERAPPS";
            item.JobNo = "POWERAPPS_001";
            item.ShortDescription = "Item from the JS SDK!";

            var authn = new dimescheduler.FormsAuthenticator(uri, user, pw);
            var client = new dimescheduler.DimeSchedulerClient(uri, authn);
            var results = await client.import.processAsync(item);
            assert.ok(results.data.Success == true);
        });
    });

    describe('#appendTask()', function () {
        it('Should successfully append task', async () => {
            var item = new dimescheduler.Import.Task();
            item.SourceApp = "POWERAPPS";
            item.SourceType = "POWERAPPS";
            item.JobNo = "POWERAPPS_001";
            item.TaskNo = "NEW_TASK_004";
            item.ShortDescription = "Item from the JS SDK!";

            var authn = new dimescheduler.FormsAuthenticator(uri, user, pw);
            var client = new dimescheduler.DimeSchedulerClient(uri, authn);
            var results = await client.import.processAsync(item);
            assert.ok(results.data.Success == true);
        });
    });
});