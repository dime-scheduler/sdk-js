import CrudType from "./base/action";
import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";
import DeleteProperty from "./base/deleteproperty";

export default class Connector extends ImportModel implements IImportModel {

    @ImportProperty("Name")
    name?: string;

    @ImportProperty("Description")
    description?: string;

    @ImportProperty("SourceApp")
    @DeleteProperty()
    sourceApp?: string;

    @ImportProperty("SourceType")
    sourceType?: string;

    @ImportProperty("SendAppointmentToWebService")
    sendAppointmentToWebService?: boolean;

    @ImportProperty("WebServiceAddress")
    uri?: string;

    @ImportProperty("BackOfficeSystem")
    backOfficeSystem?: string;

    @ImportProperty("Login")
    login?: string;

    @ImportProperty("BackOfficeSystem")
    password?: string;

    toImportRequest(action: CrudType) {
        switch (action) {
            case CrudType.Append:
                return super.createAppendRequest("mboc_upsertConnector");
            case CrudType.Delete:
                return super.createAppendRequest("mboc_deleteConnector");
        }
    }
}