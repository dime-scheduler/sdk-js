
import CrudType from "./base/action";
import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";

export default class TimeMarker extends ImportModel implements IImportModel {

    @ImportProperty("TimeMarker")
    name?: string;

    @ImportProperty("HexColor")
    color?: string;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertTimeMarker");
            default:
                return {};
        }
    }

}