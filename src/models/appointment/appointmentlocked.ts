﻿import CrudType from "../base/action";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";

export default class AppointmentLocked extends ImportModel implements IImportModel {

    @ImportProperty("SourceApp")
    sourceApp?: string;

    @ImportProperty("SourceType")
    sourceType?: string;

    appointmentNo?: string;

    @ImportProperty("AppointmentId")
    appointmentId?: number | null = 0;

    @ImportProperty("AppointmentGuid")
    appointmentGuid?: string | null;

    @ImportProperty("SentFromBackOffice")
    sentFromBackOffice?: boolean;

    @ImportProperty("Locked")
    locked?: boolean;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_updateAppointmentLocked");
            default:
                return {};
        }
    }
}