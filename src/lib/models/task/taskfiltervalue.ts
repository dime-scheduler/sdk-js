import CrudType from "../base/action";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";
import DeleteProperty from "../base/deleteproperty";

export default class TaskFilterValue extends ImportModel implements IImportModel {

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

    @ImportProperty("FilterGroup")
    @DeleteProperty()
    filterGroup?: string;

    @ImportProperty("FilterValue")
    @DeleteProperty()
    filterValue?: string;

    @ImportProperty("TransferToTemp")
    transferToTemp?: boolean;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertTaskFilterValue");
            case CrudType.Delete:
                return super.createDeleteRequest("mboc_deleteTaskFilterValue");
        }
    }
}