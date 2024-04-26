import CrudType from "../base/action";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";

export default class AppointmentUri extends ImportModel implements IImportModel {

    @ImportProperty("pSourceApp")
    sourceApp?: string;

    @ImportProperty("pSourceType")
    sourceType?: string;

    appointmentNo?: string;

    @ImportProperty("pAppointmentId")
    appointmentId?: number | null = 0;

    @ImportProperty("pAppointmentGuid")
    appointmentGuid?: string | null;

    @ImportProperty("pUrl")
    uri?: string;

    @ImportProperty("pUrlDesc")
    description?: string;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertAppointmentUrl");
            case CrudType.Delete:
                return super.createDeleteRequest("mboc_deleteAppointmentUrl");
        }
    }
}