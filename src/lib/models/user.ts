
import CrudType from "./base/action";
import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";

export default class User extends ImportModel implements IImportModel {

    @ImportProperty("")
    Name?: string;

    @ImportProperty("")
    Type?: number;

    @ImportProperty("")
    Email?: string;

    @ImportProperty("")
    Password?: string;

    @ImportProperty("")
    Language?: string;

    @ImportProperty("")
    TimeZone?: string;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertUser");
            default:
                return {};
        }
    }
}