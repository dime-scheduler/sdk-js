
import CrudType from "../base/action";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";

export default class ResourceCapacity extends ImportModel implements IImportModel {

    @ImportProperty("")
    resourceNo?: string;

    @ImportProperty("")
    date?: string;

    @ImportProperty("")
    capacityInSeconds?: number | null;

    @ImportProperty("")
    quantity?: number | null;

    @ImportProperty("")
    unitOfMeasure?: string;

    @ImportProperty("")
    unitOfMeasureConversion?: number | null;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertResourceCapacity");
            case CrudType.Delete:
                return super.createDeleteRequest("mboc_deleteResourceCapacity");
        }
    }
}