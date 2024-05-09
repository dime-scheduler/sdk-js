import axios from "axios";
import Routes from "../constants/routes";
import Environment from "../environment";
import { Connector } from "../models";
import Endpoint from "./endpoint";

class ConnectorEndpoint extends Endpoint {

    constructor(env: Environment | string, apiKey: string) {
        super(env, apiKey);
    }

    create = async (item: Connector) => {
        const body = JSON.stringify(item);

        const url = this.uri + Routes.Connector;
        const headers = {
            'X-API-KEY': this.apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        const createResponse = await axios.post(url, body, { headers: headers });
        return createResponse.data?.content;
    }
}

export default ConnectorEndpoint;