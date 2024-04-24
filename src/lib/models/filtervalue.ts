import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";

export default class FilterValue extends ImportModel implements IImportModel {

    constructor() {
        super("mboc_upsertFilterValue");
    }

    @ImportProperty("FilterGroupName")
    group?: string;

    @ImportProperty("FilterValue")
    value?: string;
}