import ImportEndPoint from './endpoints/import';
import ImportResponse from './endpoints/importresponse';
import MessageEndpoint from './endpoints/message';
import Environment from './environment';
import IImportModel from './models/base/iimportmodel';
import { Severity } from './models/constants/severity';

class DimeSchedulerClient {
    private importEndPoint: ImportEndPoint;
    private messageEndPoint: MessageEndpoint;

    constructor(apiKey: string, env: Environment = Environment.Production) {
        this.importEndPoint = new ImportEndPoint(env, apiKey);
        this.messageEndPoint = new MessageEndpoint(env, apiKey);
    }

    import(importable: IImportModel | Array<IImportModel>, append: boolean = true): Promise<ImportResponse> {
        return this.importEndPoint.processAsync(importable, append);
    }

    sendMessage(text: string, severity: Severity, user?: string): Promise<void> {
        return this.messageEndPoint.processAsync(text, severity, user);
    }
}

export default DimeSchedulerClient;