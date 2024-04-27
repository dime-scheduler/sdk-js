import Environment from "../environment";
import { Connector } from "../models";
import Endpoint from "./endpoint";

class ConnectorEndpoint extends Endpoint<Connector> {

    constructor(env: Environment, apiKey: string) {
        super(env, "connector", apiKey);
    }
}

export default ConnectorEndpoint;