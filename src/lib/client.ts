import ImportEndPoint from './endpoints/import';
import IAuthenticator from './auth/iauthenticator';

class DimeSchedulerClient {
    import: ImportEndPoint;

    constructor(uri: any, authenticator: IAuthenticator) {
        this.import = new ImportEndPoint(uri, authenticator);
    }
}

export default DimeSchedulerClient;