class Pin {
    name: string;
    color: string;

    constructor() {
        this.name = "";
        this.color = "";
    }

    toImportRequest(append = true) {
        return {
            "StoredProcedureName": "mboc_upsertPin",
            "ParameterNames": ["Name", "HexColor"],
            "ParameterValues": [this.name, this.color]
        }
    }
}

export default Pin;