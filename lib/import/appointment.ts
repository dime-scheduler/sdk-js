class Appointment {
    Id: any;
    AppointmentGuid: any;
    SourceApp: any;
    SourceType: any;
    JobNo: any;
    TaskNo: any;
    ResourceNo: any;
    Subject: any;
    Body: any;
    Start: any;
    End: any;
    TimeMarker: any;
    Category: any;
    Importance: any;
    Locked: any;
    ReplaceResource: any;
    BackofficeID: any;
    BackofficeParentID: any;
    PlanningUOM: any;
    PlanningUOMConversion: any;
    PlanningQty: any;
    UseFixPlanningQty: any;
    RoundToUOM: any;
    SentFromBackOffice: any;

    constructor() {
        this.Id;
        this.AppointmentGuid;
        this.SourceApp;
        this.SourceType;
        this.JobNo;
        this.TaskNo;
        this.ResourceNo;
        this.Subject;
        this.Body;
        this.Start;
        this.End;
        this.TimeMarker;
        this.Category;
        this.Importance;
        this.Locked;
        this.ReplaceResource;
        this.BackofficeID;
        this.BackofficeParentID;
        this.PlanningUOM;
        this.PlanningUOMConversion;
        this.PlanningQty;
        this.UseFixPlanningQty;
        this.RoundToUOM;
        this.SentFromBackOffice;
    }

    toImportRequest(append = true) {
        return {
            "StoredProcedureName": "mboc_upsertAppointment",
            "ParameterNames": [
                "AppointmentId",
                "AppointmentGuid",
                "SourceApp",
                "SourceType",
                "JobNo",
                "TaskNo",
                "ResourceNo",
                "Subject",
                "Body",
                "Start",
                "End",
                "TimeMarker",
                "Category",
                "Importance",
                "Locked",
                "ReplaceResource",
                "BackofficeID",
                "BackofficeParentID",
                "PlanningUOM",
                "PlanningUOMConversion",
                "PlanningQty",
                "UseFixPlanningQty",
                "RoundToUOM",
                "SentFromBackOffice",
            ],
            "ParameterValues": [
                this.Id,
                this.AppointmentGuid,
                this.SourceApp,
                this.SourceType,
                this.JobNo,
                this.TaskNo,
                this.ResourceNo,
                this.Subject,
                this.Body,
                this.Start,
                this.End,
                this.TimeMarker,
                this.Category,
                this.Importance,
                this.Locked,
                this.ReplaceResource,
                this.BackofficeID,
                this.BackofficeParentID,
                this.PlanningUOM,
                this.PlanningUOMConversion,
                this.PlanningQty,
                this.UseFixPlanningQty,
                this.RoundToUOM,
                this.SentFromBackOffice,

            ]
        }
    }
}

export default Appointment;