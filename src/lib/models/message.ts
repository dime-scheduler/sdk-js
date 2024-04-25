import CrudType from "./base/action";
import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";

export default class Message extends ImportModel implements IImportModel {

    @ImportProperty("")
    text?: string;

    @ImportProperty("")
    user?: string;

    @ImportProperty("")
    severity?: number;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsert");
            default:
                return {};
        }
    }
}