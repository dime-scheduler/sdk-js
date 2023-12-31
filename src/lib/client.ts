import ImportEndPoint from './endpoints/import';
import Environment from './environment';

class DimeSchedulerClient {
    import: ImportEndPoint;

    constructor(env: Environment, apiKey: string) {
        this.import = new ImportEndPoint(env, apiKey);
    }
}

export default DimeSchedulerClient;