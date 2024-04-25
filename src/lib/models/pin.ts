import CrudType from "./base/action";
import DeleteProperty from "./base/deleteproperty";
import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";

export default class Pin extends ImportModel implements IImportModel {

    @ImportProperty("Name")
    @DeleteProperty()
    name?: string;

    @ImportProperty("HexColor")
    color?: string;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertPin");
            case CrudType.Delete:
                return super.createAppendRequest("mboc_deletePin");
        }
    }
}