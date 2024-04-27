
import CrudType from "./base/action";
import DeleteProperty from "./base/deleteproperty";
import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";

export default class Container extends ImportModel implements IImportModel {

    @ImportProperty("Name")
    @DeleteProperty()
    name?: string;

    @ImportProperty("HandleDate")
    handleDate?: string | null;

    @ImportProperty("HandleLocked")
    handleLocked?: boolean;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertContainer");
            case CrudType.Delete:
                return super.createDeleteRequest("mboc_deleteContainer");
        }
    }
}