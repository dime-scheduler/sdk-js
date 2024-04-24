import IImportModel from "../base/iimportmodel";
import ImportProperty from "../base/importproperty";

export default class ResourceGpsTracking implements IImportModel {

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

    toImportRequest(): Record<string, any> {
        const json: Record<string, any> = {
            "StoredProcedureName": "mboc_upsertResourceGpsTracking",
            ParameterNames: [],
            ParameterValues: []
        };

        const propertyNames = Object.getOwnPropertyNames(this);
        for (const propertyName of propertyNames) {
            const customName = Reflect.getMetadata("customPropertyName", this, propertyName);

            if (customName) {
                json.ParameterNames.push(customName);
                json.ParameterValues.push((this[propertyName as keyof this] as any)?.toString());
            } else {
                json.ParameterNames.push(propertyName);
                json.ParameterValues.push((this[propertyName as keyof this] as any)?.toString());
            }
        }

        return json;
    }
}