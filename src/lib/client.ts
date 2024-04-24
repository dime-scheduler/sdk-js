import ImportEndPoint from './endpoints/import';
import Environment from './environment';

class DimeSchedulerClient {
    import: ImportEndPoint;

    constructor(apiKey: string, env: Environment = Environment.Production) {
        this.import = new ImportEndPoint(env, apiKey);
    }
}

export default DimeSchedulerClient;