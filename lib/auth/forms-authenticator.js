var axios = require('axios');

class FormsAuthenticator {
    constructor(uri, user, pw) {
        this.uri = uri;
        this.user = user;
        this.pw = pw;
    }

    authenticate() {
        var data = JSON.stringify({
            "UserName": this.user,
            "Password": this.pw
        });

        var config = {
            method: 'post',
            url: this.uri + '/token',
            headers: { 'Content-Type': 'application/json' },
            data: data
        };

        return axios(config);
    }
}

module.exports = FormsAuthenticator;