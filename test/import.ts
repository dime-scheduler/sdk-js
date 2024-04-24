import assert from 'assert';
import DimeSchedulerClient, { Models, Environment } from '../dist/esm';
import randomWords from 'random-words';

var apiKey = "DS-106WEYE40-TBQDOF4Z-V91MMVHT-NSHRRS";

describe('Import', function () {
    describe('#appendCategory()', function () {
        it('Should successfully append category', async () => {

            var category = new Models.Category();
            category.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

            var word = randomWords({
                exactly: 1, wordsPerString: 2, formatter: (word, index) => {
                    return index === 0 ? word.slice(0, 1).toUpperCase().concat(word.slice(1)) : word;
                }
            })[0];

            category.name = word;

            var client = new DimeSchedulerClient(apiKey, Environment.Test);

            var results = await client.import.processAsync(category);
            assert.ok(results.Success == true, !results.Success ? results.Description : results.Success);
        });
    });

    describe('#appendTimeMarker()', function () {
        it('Should successfully append time marker', async () => {

            var timeMarker = new Models.TimeMarker();
            timeMarker.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

            var word = randomWords({
                exactly: 1, wordsPerString: 2, formatter: (word, index) => {
                    return index === 0 ? word.slice(0, 1).toUpperCase().concat(word.slice(1)) : word;
                }
            })[0];

            timeMarker.name = word;

            var client = new DimeSchedulerClient(apiKey, Environment.Test);

            var results = await client.import.processAsync(timeMarker);
            assert.ok(results.Success == true, !results.Success ? results.Description : results.Success);
        });
    });

    describe('#appendPin()', function () {
        it('Should successfully append pin', async () => {

            var pin = new Models.Pin();
            pin.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

            var word = randomWords({
                exactly: 1, wordsPerString: 2, formatter: (word, index) => {
                    return index === 0 ? word.slice(0, 1).toUpperCase().concat(word.slice(1)) : word;
                }
            })[0];

            pin.name = word;

            var client = new DimeSchedulerClient(apiKey, Environment.Test);

            var results = await client.import.processAsync(pin);
            assert.ok(results.Success == true, !results.Success ? results.Description : results.Success);
        });
    });

    describe('#appendAppointment()', function () {
        it('Should successfully append appointment', async () => {
            var appointment = new Models.Appointment();
            appointment.sourceApp = "POWERAPPS";
            appointment.sourceType = "POWERAPPS";
            appointment.subject = "Hello from SDK";
            appointment.body = "...";
            appointment.resourceNo = "Hendrik (Mobile)";
            appointment.jobNo = "POWERAPP_001";
            appointment.taskNo = "SDK_TEST_001";

            appointment.start = new Date().toISOString();
            var end = new Date();
            end.setHours(end.getHours() + 2);
            appointment.end = end.toISOString();

            var client = new DimeSchedulerClient(apiKey, Environment.Test);
            var results = await client.import.processAsync(appointment);
            assert.ok(results.Success == true, !results.Success ? results.Description : results.Success);
        });
    });

    describe('#appendJob()', function () {
        it('Should successfully append job', async () => {
            var item = new Models.Job();
            item.SourceApp = "POWERAPPS";
            item.SourceType = "POWERAPPS";
            item.JobNo = "POWERAPPS_001";
            item.ShortDescription = "Item from the JS SDK!";

            var client = new DimeSchedulerClient(apiKey, Environment.Test);
            var results = await client.import.processAsync(item);
            assert.ok(results.Success == true, !results.Success ? results.Description : results.Success);
        });
    });

    describe('#appendTask()', function () {
        it('Should successfully append task', async () => {
            var item = new Models.Task();
            item.sourceApp = "POWERAPPS";
            item.sourceType = "POWERAPPS";
            item.jobNo = "POWERAPPS_001";
            item.taskNo = "NEW_TASK_004";
            item.shortDescription = "Item from the JS SDK!";

            var client = new DimeSchedulerClient(apiKey, Environment.Test);
            var results = await client.import.processAsync(item);
            assert.ok(results.Success == true, !results.Success ? results.Description : results.Success);
        });
    });

    describe('#updateLocation()', function () {
        it('Should successfully update actual location', async () => {
            var location = new Models.ResourceGpsTracking();
            location.resourceNo = "ARNOUD";
            location.latitude = 38.432649;
            location.longitude = -0.634456;

            var client = new DimeSchedulerClient(apiKey, Environment.Test);

            var results = await client.import.processAsync(location);
            assert.ok(results.Success == true, !results.Success ? results.Description : results.Success);
        });
    });

    describe('#setFilterGroup()', function () {
        it('Should successfully set filter group', async () => {
            var filterGroup = new Models.FilterGroup();
            filterGroup.name = "Department"

            var client = new DimeSchedulerClient(apiKey, Environment.Test);

            var results = await client.import.processAsync(filterGroup);
            assert.ok(results.Success == true, !results.Success ? results.Description : results.Success);
        });
    });

    describe('#setFilterValue()', function () {
        it('Should successfully set filter value', async () => {
            var filterValue = new Models.FilterValue();
            filterValue.group = "Department";
            filterValue.value = "IT";

            var client = new DimeSchedulerClient(apiKey, Environment.Test);

            var results = await client.import.processAsync(filterValue);
            assert.ok(results.Success == true, !results.Success ? results.Description : results.Success);
        });
    });
});