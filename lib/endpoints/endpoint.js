var axios = require('axios');
var FormsAuthenticator = require('../auth/forms-authenticator');

class EndPoint {
    constructor() {
    }

    async processAsync(data) {       
        var auth = new FormsAuthenticator();
        var authResult = await auth.authenticate();
        var token = authResult.data.access_token;
        var data = JSON.stringify(data);

        var headers = {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        return axios.post('http://ds-vnext-test.azurewebsites.net/api/Import/Insert', data, { headers: headers });
    }
}

module.exports = EndPoint;