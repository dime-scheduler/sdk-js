import axios from 'axios';
import IAuthenticator from './iauthenticator';

class UrlEncodedFormsAuthenticator implements IAuthenticator {
    uri: string;
    user: string;
    pw: string;

    constructor(uri: string, user: string, pw: string) {
        this.uri = uri;
        this.user = user;
        this.pw = pw;
    }

    authenticate(): any {
        const data = new URLSearchParams({
            grant_type: "password",
            username: this.user,
            password: this.pw
        });

        const config = {
            method: 'post',
            url: this.uri + '/token',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            },
            data: data
        };

        return axios(config);
    }
}

export default UrlEncodedFormsAuthenticator;
