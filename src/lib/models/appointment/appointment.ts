
import CrudType from "../base/action";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";

export default class Appointment extends ImportModel implements IImportModel {
    @ImportProperty("")
    appointmentNo?: string;

    @ImportProperty("")
    id?: number | null;

    @ImportProperty("")
    appointmentGuid?: string | null;

    @ImportProperty("")
    sourceApp?: string;

    @ImportProperty("")
    sourceType?: string;

    @ImportProperty("")
    jobNo?: string;

    @ImportProperty("")
    taskNo?: string;

    @ImportProperty("")
    resourceNo?: string;

    @ImportProperty("")
    subject?: string;

    @ImportProperty("")
    body?: string;

    @ImportProperty("")
    start?: string | null;

    @ImportProperty("")
    end?: string | null;

    @ImportProperty("")
    isAllDay?: boolean | null;

    @ImportProperty("")
    timeMarker?: string;

    @ImportProperty("")
    category?: string;

    @ImportProperty("")
    importance?: number;

    @ImportProperty("")
    locked?: boolean | null;

    @ImportProperty("")
    replaceResource?: boolean | null;

    @ImportProperty("")
    backOfficeId?: string;

    @ImportProperty("")
    backOfficeParentId?: string;

    @ImportProperty("")
    unitOfMeasure?: string;

    @ImportProperty("")
    unitOfMeasureConversion?: number | null;

    @ImportProperty("")
    planningQuantity?: number | null;

    @ImportProperty("")
    useFixedPlanningQuantity?: boolean | null;

    @ImportProperty("")
    roundToUnitOfMeasure?: boolean | null;

    @ImportProperty("")
    sentFromBackOffice?: boolean | null;

    @ImportProperty("")
    planningUom?: string;

    @ImportProperty("")
    planningUomConversion?: string;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertAppointment");
            case CrudType.Delete:
                return super.createDeleteRequest("mboc_deleteAppointment");
        }
    }
}