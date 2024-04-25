
import CrudType from "../base/action";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";

export default class AppointmentImportance extends ImportModel implements IImportModel {

    @ImportProperty("")
    sourceApp?: string;

    @ImportProperty("")
    sourceType?: string;

    @ImportProperty("")
    appointmentNo?: string;

    @ImportProperty("")
    appointmentId?: number | null;

    @ImportProperty("")
    importance?: number;

    @ImportProperty("")
    appointmentGuid?: string | null;

    @ImportProperty("")
    sentFromBackOffice?: boolean;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertAppointmentImportance");
            case CrudType.Delete:
                return super.createDeleteRequest("mboc_deleteAppointmentImportance");
        }
    }
}