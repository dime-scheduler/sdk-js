
import CrudType from "../base/action";
import IImportModel from "../base/iimportmodel";
import ImportModel from "../base/importmodel";
import ImportProperty from "../base/importproperty";

export default class ResourceGpsTracking extends ImportModel implements IImportModel {
    @ImportProperty("ResourceNo")
    resourceNo?: string;

    @ImportProperty()
    gpsTrackingResourceNo?: string;

    @ImportProperty("Latitude")
    latitude?: number;

    @ImportProperty("Longitude")
    longitude?: number;

    speed?: number | null;

    date?: string | null;

    rowId?: string;

    power?: string;

    toImportRequest(action: CrudType = CrudType.Append) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertResourceGpsTracking");
            case CrudType.Delete:
                return {};
        }
    }
}