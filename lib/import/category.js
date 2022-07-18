class Category {
    constructor() {
        this.name = "";
        this.color = "";
    }

    toImportRequest(append = true) {
        return {
            "StoredProcedureName": "mboc_upsertCategory",
            "ParameterNames": ["CategoryName", "DisplayName", "CategoryHexColor"],
            "ParameterValues": [this.name, this.name, this.color]
        }
    }
}

module.exports = Category;