var Endpoint = require('./endpoint');

class ImportEndPoint extends Endpoint {
    constructor(uri, authn) {
        super(uri, authn);
    }

    async processAsync(importable) {
        return super.processAsync(importable.toImportRequest());
    }
}

module.exports = ImportEndPoint;