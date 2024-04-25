
import CrudType from "./base/action";
import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";

export default class FilterValue extends ImportModel implements IImportModel {

    @ImportProperty("FilterGroupName")
    group?: string;

    @ImportProperty("FilterValue")
    value?: string;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertFilterValue");
            default:
                return {};
        }
    }
}