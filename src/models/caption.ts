import CrudType from "./base/action";
import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";

export default class Caption extends ImportModel implements IImportModel {

    @ImportProperty("Context")
    context?: number;

    @ImportProperty("SourceTable")
    sourceTable?: string;

    @ImportProperty("FieldName")
    fieldName?: string;

    @ImportProperty("Language")
    language?: string;

    @ImportProperty("Caption")
    text?: string;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertCaption");
            case CrudType.Delete:
                return {}
        }
    }
}