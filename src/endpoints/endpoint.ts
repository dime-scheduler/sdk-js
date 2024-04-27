import axios from 'axios';
import Environment from "../environment";
import Action from '../constants/action';

abstract class Endpoint {
    apiKey: string;
    uri: string;

    constructor(env: Environment, apiKey: string) {
        this.uri = env + "/";
        this.apiKey = apiKey;
    }

    protected async execute<T>(route: string, action: Action, item: T | T[]): Promise<void> {
        const data = (!Array.isArray(item)) ? [item] : item;
        const body = JSON.stringify(data);

        const headers = {
            'X-API-KEY': this.apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        switch (action) {
            case Action.Create:
                await axios.post(this.uri + route, body, { headers: headers });
                break;
            case Action.Update:
                await axios.put(this.uri, body, { headers: headers });
                break;
            case Action.Delete:
                await axios.delete(this.uri, { data: body, headers });
                break;
        }
    }
}

export default Endpoint;