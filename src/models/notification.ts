
import CrudType from "./base/action";
import DeleteProperty from "./base/deleteproperty";
import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";
import { NotificationType } from ".";

export default class Notification extends ImportModel implements IImportModel {

    @ImportProperty("SourceApp")
    @DeleteProperty()
    sourceApp?: string;

    @ImportProperty("SourceType")
    @DeleteProperty()
    sourceType?: string;

    @ImportProperty("AppointmentId")
    @DeleteProperty()
    appointmentId?: number | null;

    appointmentNo?: string;

    @ImportProperty("mboc_id")
    @DeleteProperty()
    connectorId?: string;

    @ImportProperty("NotificationType")
    type?: NotificationType;

    @ImportProperty("NotificationCode")
    code?: string;

    @ImportProperty("NotificationText")
    text!: string;

    @ImportProperty("NotificationDate")
    date!: Date;

    @ImportProperty("JobNo")
    @DeleteProperty()
    jobNo?: string;

    @ImportProperty("TaskNo")
    @DeleteProperty()
    taskNo?: string;

    @ImportProperty("AppointmentGuid")
    @DeleteProperty()
    appointmentGuid?: string | null;

    @ImportProperty("SentFromBackOffice")
    @DeleteProperty()
    sentFromBackOffice?: boolean;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertNotification");
            case CrudType.Delete:
                return super.createAppendRequest("mboc_deleteNotification");
        }
    }
}