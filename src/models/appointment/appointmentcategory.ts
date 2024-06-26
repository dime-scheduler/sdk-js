﻿
import CrudType from "../base/action";
import DeleteProperty from "../base/deleteproperty";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";

export default class AppointmentCategory extends ImportModel implements IImportModel {

    @ImportProperty("SourceApp")
    @DeleteProperty()
    sourceApp?: string;

    @ImportProperty("SourceType")
    @DeleteProperty()
    sourceType?: string;

    appointmentNo?: string;

    @ImportProperty("AppointmentId")
    appointmentId?: number | null = 0;

    @ImportProperty("AppointmentGuid")
    appointmentGuid?: string | null;

    @ImportProperty("SentFromBackOffice")
    sentFromBackOffice?: boolean;

    @ImportProperty("Category")
    category?: string;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_updateAppointmentCategory");
            default:
                return {};
        }
    }
}