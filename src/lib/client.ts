import ImportEndPoint from './endpoints/import';
import Environment from './environment';
import IImportModel from './models/base/iimportmodel';

class DimeSchedulerClient {
    private importEndPoint: ImportEndPoint;

    constructor(apiKey: string, env: Environment = Environment.Production) {
        this.importEndPoint = new ImportEndPoint(env, apiKey);
    }

    import(importable: IImportModel | Array<IImportModel>, append: boolean = true) {
        return this.importEndPoint.processAsync(importable, append);
    }
}

export default DimeSchedulerClient;