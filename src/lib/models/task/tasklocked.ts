
import CrudType from "../base/action";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";
import DeleteProperty from "../base/deleteproperty";

export default class TaskLocked extends ImportModel implements IImportModel {

    @ImportProperty("SourceApp")
    @DeleteProperty()
    sourceApp?: string;

    @ImportProperty("SourceType")
    @DeleteProperty()
    sourceType?: string;

    @ImportProperty("JobNo")
    @DeleteProperty()
    jobNo?: string;

    @ImportProperty("TaskNo")
    @DeleteProperty()
    taskNo?: string;

    @ImportProperty("Locked")
    locked?: boolean;

    @ImportProperty("SentFromBackOffice")
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