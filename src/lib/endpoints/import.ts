import axios from 'axios';
import Endpoint from './endpoint';
import Environment from '../environment';
import IImportModel from '../models/base/iimportmodel';
import CrudType from '../models/base/action';

class ImportEndPoint extends Endpoint {
    constructor(env: Environment, apiKey: string) {
        super(env, apiKey);
    }

    async processAsync(importable: IImportModel | Array<IImportModel>, append: boolean = true) {
        const params = (importable instanceof Array) ? importable : [importable];

        const data = params.map(x => x.toImportRequest(append ? CrudType.Append : CrudType.Delete));
        const body = JSON.stringify(data);

        console.log(body);

        const headers = {
            'X-API-KEY': this.apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        const url = this.uri + '/import';

        const response = await axios.post(url, body, { headers: headers });
        return JSON.parse(response.data.content);
    }
}

export default ImportEndPoint;