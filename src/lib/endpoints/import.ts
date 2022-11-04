import axios from 'axios';
import IAuthenticator from '../auth/iauthenticator';
import Endpoint from './endpoint';

class ImportEndPoint extends Endpoint {
    constructor(uri: any, authn: IAuthenticator) {
        super(uri, authn);
    }

    async processAsync(importable: { toImportRequest: () => any; } | Array<{ toImportRequest: () => any; }>) {
        const params = (importable instanceof Array) ? importable : [importable];
        return await this.doImportRequest("Execute", params.map(x => x.toImportRequest()));
    }

    protected async doImportRequest(endpoint: string, data: any) {
        const authResult = await this.authn.authenticate();
        const token = authResult.data.access_token;
        const body = JSON.stringify(data);

        const headers = {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        return axios.post(this.uri + '/api/Import/' + endpoint, body, { headers: headers });
    }
}

export default ImportEndPoint;