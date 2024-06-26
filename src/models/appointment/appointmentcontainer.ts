﻿
import CrudType from "../base/action";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";

export default class AppointmentContainer extends ImportModel implements IImportModel {
    @ImportProperty("Container")
    container?: string;

    appointmentNo?: string;

    @ImportProperty("Appointment")
    appointment?: string;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertAppointmentContainer");
            case CrudType.Delete:
                return super.createDeleteRequest("mboc_deleteAppointmentContainer");
        }
    }
}