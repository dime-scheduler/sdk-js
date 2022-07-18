var axios = require('axios');

class EndPoint {
    constructor(uri, authn) {
        this.uri = uri;
        this.authn = authn;
    }

    async processAsync(data) {
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

module.exports = EndPoint;