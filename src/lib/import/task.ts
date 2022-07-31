class Task {
    SourceApp: string;
    SourceType: string;
    JobNo: string;
    TaskNo: string;
    ShortDescription: string;
    Description: string;
    Type: string;
    Name: string;
    Category: string;
    TimeMarker: string;
    Pin: string;

    constructor() {
        this.SourceApp = "";
        this.SourceType = "";
        this.JobNo = "";
        this.TaskNo = "";
        this.ShortDescription = "";
        this.Description = "";
        this.Type = "";
        this.Name = "";
        this.Category = "";
        this.TimeMarker = "";
        this.Pin = "";
    }

    toImportRequest(append = true) {
        return {
            "StoredProcedureName": "mboc_upsertTask",
            "ParameterNames": ["SourceApp", "SourceType", "JobNo", "TaskNo", "ShortDescription"],
            "ParameterValues": [this.SourceApp, this.SourceType, this.JobNo, this.TaskNo, this.ShortDescription]
        }
    }
}

export default Task;