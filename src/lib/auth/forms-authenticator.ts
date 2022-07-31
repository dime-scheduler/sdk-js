import axios from 'axios';

class FormsAuthenticator {
    uri: any;
    user: any;
    pw: any;

    constructor(uri: any, user: any, pw: any) {
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

export default FormsAuthenticator;