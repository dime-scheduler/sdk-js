
import CrudType from "../base/action";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";

export default class ResourceUri extends ImportModel implements IImportModel {

    @ImportProperty("ResourceNo")
    resourceNo?: string;

    @ImportProperty("Url")
    uri?: string;

    @ImportProperty("UrlDesc")
    description?: string;


    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertResourceUrl");
            case CrudType.Delete:
                return super.createDeleteRequest("mboc_deleteResourceUrl");
        }
    }
}