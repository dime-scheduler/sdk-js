import CrudType from "./action";


export default interface IImportModel {
    toImportRequest(action: CrudType): Record<string, any>;
}
