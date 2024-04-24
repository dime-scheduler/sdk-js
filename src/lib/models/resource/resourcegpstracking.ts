import IImportModel from "../base/iimportmodel";
import ImportProperty from "../base/importproperty";
import ImportModel from "../base/importmodel";

export default class ResourceGpsTracking extends ImportModel implements IImportModel {
    constructor() {
        super("mboc_upsertResourceGpsTracking");
    }

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
}