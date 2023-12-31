import axios from 'axios';
import Endpoint from './endpoint';
import Environment from '../environment';

class ImportEndPoint extends Endpoint {
    constructor(env: Environment, apiKey: string) {
        super(env, apiKey);
    }

    async processAsync(importable: { toImportRequest: () => any; } | Array<{ toImportRequest: () => any; }>) {
        const params = (importable instanceof Array) ? importable : [importable];
        return await this.doImportRequest("", params.map(x => x.toImportRequest()));
    }

    protected async doImportRequest(endpoint: string, data: any) {
        const body = JSON.stringify(data);

        const headers = {
            'X-API-KEY': this.apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        const url = this.uri + '/import';

        console.log(body);
        return axios.post(url, body, { headers: headers });
    }
}

export default ImportEndPoint;