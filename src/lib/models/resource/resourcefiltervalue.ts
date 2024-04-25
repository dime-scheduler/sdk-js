import CrudType from "../base/action";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";

export default class ResourceFilterValue extends ImportModel implements IImportModel {

    @ImportProperty("SourceApp")
    sourceApp?: string;

    @ImportProperty("SourceType")
    sourceType?: string;

    @ImportProperty("ResourceNo")
    resourceNo?: string;

    @ImportProperty("FilterGroup")
    filterGroup?: string;

    @ImportProperty("FilterValue")
    filterValue?: string;

    @ImportProperty("TransferToTemp")
    transferToTemp?: boolean;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertResourceFilterValue");
            case CrudType.Delete:
                return super.createDeleteRequest("mboc_deleteResourceFilterValue");
        }
    }
}