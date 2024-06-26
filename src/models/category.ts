import CrudType from "./base/action";
import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";
import DeleteProperty from "./base/deleteproperty";

export default class Category extends ImportModel implements IImportModel {

    @ImportProperty("CategoryName")
    @DeleteProperty()
    name?: string;

    @ImportProperty("DisplayName")
    displayName?: string;

    @ImportProperty("CategoryHexColor")
    color?: string;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertCategory");
            case CrudType.Delete:
                return super.createAppendRequest("mboc_deleteCategory");
        }
    }
}