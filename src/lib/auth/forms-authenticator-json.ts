import axios from 'axios';
import IAuthenticator from './iauthenticator';

class FormsAuthenticator implements IAuthenticator {
    uri: string;
    user: string;
    pw: string;

    constructor(uri: string, user: string, pw: string) {
        this.uri = uri;
        this.user = user;
        this.pw = pw;
    }

    authenticate(): any {
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
