class TimeMarker {
    constructor() {
        this.name = "";
        this.color = "";
    }

    toImportRequest(append = true) {
        return {
            "StoredProcedureName": "mboc_upsertTimeMarker",
            "ParameterNames": ["TimeMarker", "HexColor"],
            "ParameterValues": [this.name, this.color]
        }
    }
}

module.exports = TimeMarker;