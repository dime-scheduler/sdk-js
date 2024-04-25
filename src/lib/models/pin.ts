
import CrudType from "./base/action";
import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";

export default class Pin extends ImportModel implements IImportModel {

    @ImportProperty("")
    name?: string;

    @ImportProperty("")
    color?: string;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertPin");
            default:
                return {};
        }
    }
}