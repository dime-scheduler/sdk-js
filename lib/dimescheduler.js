'use strict';

var ImportEndPoint = require('./endpoints/import');

class DimeSchedulerClient {
    constructor() {
        this.import = new ImportEndPoint();
    }    
}

module.exports = DimeSchedulerClient;