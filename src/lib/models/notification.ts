

import CrudType from "./base/action";
import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";

export default class Notification extends ImportModel implements IImportModel {

    @ImportProperty("")
    sourceApp?: string;

    @ImportProperty("")
    sourceType?: string;

    @ImportProperty("")
    appointmentId?: number | null;

    @ImportProperty("")
    appointmentNo?: string;

    @ImportProperty("")
    connectorId?: string;

    @ImportProperty("")
    type?: number;

    @ImportProperty("")
    code?: string;

    @ImportProperty("")
    text?: string;

    @ImportProperty("")
    date?: string | null;

    @ImportProperty("")
    jobNo?: string;

    @ImportProperty("")
    taskNo?: string;

    @ImportProperty("")
    appointmentGuid?: string | null;

    @ImportProperty("")
    sentFromBackOffice?: boolean;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertNotification");
            default:
                return {};
        }
    }
}