
import CrudType from "./base/action";
import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";

export default class Container extends ImportModel implements IImportModel {

    @ImportProperty("")
    name?: string;

    @ImportProperty("")
    handleDate?: string | null;

    @ImportProperty("")
    handleLocked?: boolean;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsert");
            default:
                return {};
        }
    }
}