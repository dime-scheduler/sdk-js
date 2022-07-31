import axios from 'axios';

class EndPoint {
    authn: any;
    uri: string;

    constructor(uri: any, authn: any) {
        this.uri = uri;
        this.authn = authn;
    }

    protected async insert(data: string) {
        var authResult = await this.authn.authenticate();
        var token = authResult.data.access_token;
        var data = JSON.stringify(data);

        var headers = {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        return axios.post(this.uri + '/api/Import/Insert', data, { headers: headers });
    }
}

export default EndPoint;