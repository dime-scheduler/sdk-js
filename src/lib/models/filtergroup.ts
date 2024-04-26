import CrudType from "./base/action";
import DeleteProperty from "./base/deleteproperty";
import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";

export default class FilterGroup extends ImportModel implements IImportModel {
    id?: number;

    @ImportProperty("GroupName")
    @DeleteProperty()
    name?: string;

    columnNo?: number;

    dataFilter?: boolean;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertFilterGroup");
            case CrudType.Delete:
                return super.createDeleteRequest("mboc_deleteFilterGroup");
        }
    }
}