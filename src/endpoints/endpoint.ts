import axios from 'axios';
import Environment from "../environment";

abstract class Endpoint<T> {
    apiKey: string;
    uri: string;

    constructor(env: Environment, endpoint: string, apiKey: string) {
        this.uri = env + "/" + endpoint;
        this.apiKey = apiKey;
    }

    async create(item: T | T[]): Promise<void> {
        const data = (!Array.isArray(item)) ? [item] : item;
        const body = JSON.stringify(data);

        const headers = {
            'X-API-KEY': this.apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        const response = await axios.post(this.uri, body, { headers: headers });
    }

    async update(item: T | T[]): Promise<void> {
        const data = (!Array.isArray(item)) ? [item] : item;
        const body = JSON.stringify(data);

        const headers = {
            'X-API-KEY': this.apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        const response = await axios.put(this.uri, body, { headers: headers });
    }

    async delete(item: T | T[]): Promise<void> {
        const data = (!Array.isArray(item)) ? [item] : item;
        const body = JSON.stringify(data);

        const headers = {
            'X-API-KEY': this.apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        const response = await axios.delete(this.uri, { data: body, headers });
    }
}

export default Endpoint;