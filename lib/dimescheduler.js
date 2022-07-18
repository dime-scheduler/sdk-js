'use strict';

var ImportEndPoint = require('./endpoints/import');

class DimeSchedulerClient {
    constructor(uri, authenticator) {
        this.import = new ImportEndPoint(uri, authenticator);
    }
}

module.exports = DimeSchedulerClient;