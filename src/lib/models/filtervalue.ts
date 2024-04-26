import CrudType from "./base/action";
import DeleteProperty from "./base/deleteproperty";
import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";

export default class FilterValue extends ImportModel implements IImportModel {

    @ImportProperty("FilterGroupName")
    @DeleteProperty()
    group?: string;

    @ImportProperty("FilterValue")
    @DeleteProperty()
    value?: string;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertFilterValue");
            case CrudType.Delete:
                return super.createAppendRequest("mboc_deleteFilterValue");
        }
    }
}