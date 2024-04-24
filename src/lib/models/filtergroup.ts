import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";

export default class FilterGroup extends ImportModel implements IImportModel {

    constructor() {
        super("mboc_upsertFilterGroup");
    }

    id?: number;

    @ImportProperty("GroupName")
    name?: string;

    columnNo?: number;

    dataFilter?: boolean;

}