var axios = require('axios');
var Endpoint = require('./endpoint');

class ImportEndPoint extends Endpoint {
    constructor() {
        super();
    }

    async processAsync() {
        return super.processAsync({
            "StoredProcedureName": "mboc_upsertCategory",
            "ParameterNames": ["CategoryName", "DisplayName", "CategoryHexColor"],
            "ParameterValues": ["SDK JS", "SDK JS", "#000999"]
        });
    }
}

module.exports = ImportEndPoint;