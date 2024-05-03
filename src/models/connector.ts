import CrudType from "./base/action";
import IImportModel from "./base/iimportmodel";
import ImportModel from "./base/importmodel";
import ImportProperty from "./base/importproperty";
import DeleteProperty from "./base/deleteproperty";
import { BackOfficeSystemType } from ".";

export default class Connector extends ImportModel implements IImportModel {
    name?: string;
    description?: string;

    @ImportProperty("SourceApp")
    @DeleteProperty()
    sourceApp!: string;

    @ImportProperty("SendAppointmentToWebService")
    sendAppointmentToWebService?: boolean = true;

    @ImportProperty("WebServiceAddress")
    uri!: string;

    @ImportProperty("BackOfficeSystem")
    backOfficeSystem!: BackOfficeSystemType;

    @ImportProperty("Login")
    login?: string;

    @ImportProperty("Password")
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