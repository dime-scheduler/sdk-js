
import CrudType from "../base/action";
import DeleteProperty from "../base/deleteproperty";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";

export default class Appointment extends ImportModel implements IImportModel {
    appointmentNo?: string;

    @ImportProperty("AppointmentId")
    @DeleteProperty()
    id?: number | null;

    @ImportProperty("AppointmentGuid")
    @DeleteProperty()
    appointmentGuid?: string | null;

    @ImportProperty("SourceApp")
    @DeleteProperty()
    sourceApp?: string;

    @ImportProperty("SourceType")
    @DeleteProperty()
    sourceType?: string;

    @ImportProperty("JobNo")
    @DeleteProperty()
    jobNo?: string;

    @ImportProperty("TaskNo")
    @DeleteProperty()
    taskNo?: string;

    @ImportProperty("ResourceNo")
    @DeleteProperty()
    resourceNo?: string;

    @ImportProperty("Subject")
    subject?: string;

    @ImportProperty("Body")
    body?: string;

    @ImportProperty("Start")
    start?: string | null;

    @ImportProperty("End")
    end?: string | null;

    @ImportProperty("IsAllDayEvent")
    isAllDay?: boolean | null;

    @ImportProperty("TimeMarker")
    timeMarker?: string;

    @ImportProperty("Category")
    category?: string;

    @ImportProperty("Importance")
    importance?: number;

    @ImportProperty("Locked")
    locked?: boolean | null;

    @ImportProperty("ReplaceResource")
    replaceResource?: boolean | null;

    @ImportProperty("BackofficeID")
    backOfficeId?: string;

    @ImportProperty("BackofficeParentID")
    backOfficeParentId?: string;

    @ImportProperty("PlanningUOM")
    unitOfMeasure?: string;

    @ImportProperty("PlanningUOMConversion")
    unitOfMeasureConversion?: number | null;

    @ImportProperty("PlanningQty")
    planningQuantity?: number | null;

    @ImportProperty("UseFixPlanningQty")
    useFixedPlanningQuantity?: boolean | null;

    @ImportProperty("RoundToUOM")
    roundToUnitOfMeasure?: boolean | null;

    @ImportProperty("SentFromBackOffice")
    sentFromBackOffice?: boolean | null;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertAppointment");
            case CrudType.Delete:
                return super.createDeleteRequest("mboc_deleteAppointment");
        }
    }
}