﻿
import CrudType from "../base/action";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";
import DeleteProperty from "../base/deleteproperty";

export default class TaskLocked extends ImportModel implements IImportModel {
    @ImportProperty("")
    @DeleteProperty()
    sourceApp?: string;

    @ImportProperty("")
    @DeleteProperty()
    sourceType?: string;

    @ImportProperty("")
    @DeleteProperty()
    jobNo?: string;

    @ImportProperty("")
    @DeleteProperty()
    taskNo?: string;

    @ImportProperty("")
    locked?: boolean;

    @ImportProperty("")
    sentFromBackOffice?: boolean;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertTaskLocked");
            default:
                return {};
        }
    }
}