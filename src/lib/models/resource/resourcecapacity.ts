
import CrudType from "../base/action";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";

export default class ResourceCapacity extends ImportModel implements IImportModel {

    @ImportProperty("ResourceNo")
    resourceNo?: string;

    @ImportProperty("CapacityDate")
    date?: Date;

    @ImportProperty("CapacityInSeconds")
    capacityInSeconds?: number | null;

    @ImportProperty("CapacityQty")
    quantity?: number | null;

    @ImportProperty("CapacityUOM")
    unitOfMeasure?: string;

    @ImportProperty("CapacityUOMConversion")
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