var axios = require('axios');

class FormsAuthenticator {
    authenticate() {        
        var data = JSON.stringify({
            "UserName": "hendrik@dimescheduler.com",
            "Password": "Admin!1"
        });

        var config = {
            method: 'post',
            url: 'http://ds-vnext-test.azurewebsites.net/token',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        return axios(config);
    }
}

module.exports = FormsAuthenticator;