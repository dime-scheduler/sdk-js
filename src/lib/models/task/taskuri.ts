
import CrudType from "../base/action";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";
import DeleteProperty from "../base/deleteproperty";

export default class TaskUri extends ImportModel implements IImportModel {

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
    @DeleteProperty()
    uri?: string;

    @ImportProperty("")
    description?: string;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertTaskUrl");
            case CrudType.Delete:
                return super.createDeleteRequest("mboc_deleteTaskUrl");
        }
    }
}