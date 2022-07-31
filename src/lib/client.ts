import ImportEndPoint from './endpoints/import';

class DimeSchedulerClient {
    import: ImportEndPoint;

    constructor(uri: any, authenticator: any) {
        this.import = new ImportEndPoint(uri, authenticator);
    }
}

export default DimeSchedulerClient;