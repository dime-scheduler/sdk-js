
import CrudType from "../base/action";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";

export default class Assignment extends ImportModel implements IImportModel {
    @ImportProperty("")
    sourceApp?: string;

    @ImportProperty("")
    sourceType?: string;

    @ImportProperty("")
    appointmentNo?: string;

    @ImportProperty("")
    appointmentId?: number;

    @ImportProperty("")
    appointmentGuid?: string | null;

    @ImportProperty("")
    resourceNo?: string;

    @ImportProperty("")
    sentFromBackOffice?: boolean;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertAppointmentResource");
            case CrudType.Delete:
                return super.createDeleteRequest("mboc_deleteAppointmentResource");
        }
    }
}