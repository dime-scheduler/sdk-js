import axios from 'axios';
import Environment from "../environment";
import Action from '../constants/action';
import { ImportResponse } from './import';

abstract class Endpoint {
    apiKey: string;
    uri: string;

    constructor(env: Environment, apiKey: string) {
        this.uri = env + "/";
        this.apiKey = apiKey;
    }

    protected async get<T>(route: string): Promise<T[]> {
        const url = this.uri + route;
        const headers = {
            'X-API-KEY': this.apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        const response = await axios.get<T[]>(url, { headers: headers });
        return response.data;
    }

    protected async execute<T>(route: string, action: Action, item: T | T[]): Promise<ImportResponse> {
        const data = (!Array.isArray(item)) ? [item] : item;
        const body = JSON.stringify(data);

        const url = this.uri + route;
        const headers = {
            'X-API-KEY': this.apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        switch (action) {
            case Action.Create:
                const createResponse = await axios.post(url, body, { headers: headers });
                return ImportResponse.fromRawJson(createResponse.data?.content);
            case Action.Update:
                const updateResponse = await axios.put(url, body, { headers: headers });
                return ImportResponse.fromRawJson(updateResponse.data?.content ?? "{}");
            case Action.Delete:
                const deleteResponse = await axios.delete(url, { data: body, headers });
                return ImportResponse.fromRawJson(deleteResponse.data?.content ?? "{}");
        }
    }
}

export default Endpoint;