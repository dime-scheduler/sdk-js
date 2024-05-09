
require('dotenv').config()

const express = require('express');
const dimescheduler = require('dimescheduler');
const models = require('dimescheduler/models');

const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/task', async (req, res, next) => {
    console.log("Received request to create task.")
    // const jobBody = req.body;

    try {
        const client = new dimescheduler.default(process.env.DS_API_KEY, dimescheduler.Environment.Sandbox);

        const job = new models.Job();
        job.sourceApp = "EXPRESS";
        job.sourceType = "EXPRESS";
        job.jobNo = "EXPRESS";
        job.shortDescription = "EXPRESS";

        const task = new models.Task();
        task.sourceApp = "EXPRESS";
        task.sourceType = "EXPRESS";
        task.jobNo = "EXPRESS";
        task.taskNo = "EXPRESS2";
        task.shortDescription = "EXPRESS";

        var result = await client.import([job, task]);
        console.log(result);

        const msg = result.success ? "Created task!" : "Could not create task: " + result.message;
        res.send({ message: msg });
    }
    catch (err) {
        console.log(err);
        return next(err);
    }

});

var server = app.listen(port, function () {
    console.log("Express app running at port " + port);
})
