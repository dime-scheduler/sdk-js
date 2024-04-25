
import CrudType from "../base/action";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";

export default class ResourceFilterValue extends ImportModel implements IImportModel {

    @ImportProperty("")
    sourceApp?: string;

    @ImportProperty("")
    sourceType?: string;

    @ImportProperty("")
    resourceNo?: string;

    @ImportProperty("")
    filterGroup?: string;

    @ImportProperty("")
    filterValue?: string;

    @ImportProperty("")
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