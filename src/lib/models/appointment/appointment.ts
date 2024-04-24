export default class Appointment {
    appointmentNo?: string;
    id?: number | null;
    appointmentGuid?: string | null;
    sourceApp?: string;
    sourceType?: string;
    jobNo?: string;
    taskNo?: string;
    resourceNo?: string;
    subject?: string;
    body?: string;
    start?: string | null;
    end?: string | null;
    isAllDay?: boolean | null;
    timeMarker?: string;
    category?: string;
    importance?: number;
    locked?: boolean | null;
    replaceResource?: boolean | null;
    backOfficeId?: string;
    backOfficeParentId?: string;
    unitOfMeasure?: string;
    unitOfMeasureConversion?: number | null;
    planningQuantity?: number | null;
    useFixedPlanningQuantity?: boolean | null;
    roundToUnitOfMeasure?: boolean | null;
    sentFromBackOffice?: boolean | null;
    planningUom?: string;
    planningUomConversion?: string;

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
                this.id,
                this.appointmentGuid,
                this.sourceApp,
                this.sourceType,
                this.jobNo,
                this.taskNo,
                this.resourceNo,
                this.subject,
                this.body,
                this.start,
                this.end,
                this.timeMarker,
                this.category,
                this.importance,
                this.locked,
                this.replaceResource,
                this.backOfficeId,
                this.backOfficeParentId,
                this.planningUom,
                this.planningUomConversion,
                this.planningQuantity,
                this.useFixedPlanningQuantity,
                this.roundToUnitOfMeasure,
                this.sentFromBackOffice,
            ]
        }
    }
}