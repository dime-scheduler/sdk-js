'use strict';

var ImportEndPoint = require('./endpoints/import');
var FormsAuthenticator = require('./auth/forms-authenticator');
var Import = require('./import');

class DimeSchedulerClient {
    constructor(uri, authenticator) {
        this.import = new ImportEndPoint(uri, authenticator);
    }
}

module.exports = {
    DimeSchedulerClient,
    FormsAuthenticator,
    Import
};