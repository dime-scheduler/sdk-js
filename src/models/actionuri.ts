
import CrudType from "./base/action";
import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";
import { UriType } from ".";

export default class ActionUri extends ImportModel implements IImportModel {

    @ImportProperty("SourceApp")
    sourceApp?: string;

    @ImportProperty("SourceType")
    sourceType?: string;

    @ImportProperty("UrlType")
    uriType?: UriType;

    @ImportProperty("Url")
    uri?: string;

    @ImportProperty("UrlDesc")
    description?: string;

    @ImportProperty("DefaultUrl")
    default?: boolean;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertActionUrl");
            default:
                return {};
        }
    }
}