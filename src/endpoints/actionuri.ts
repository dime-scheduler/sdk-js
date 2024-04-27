import Environment from "../environment";
import { ActionUri } from "../models";
import Endpoint from "./endpoint";

class ActionUriEndpoint extends Endpoint<ActionUri> {

    constructor(env: Environment, apiKey: string) {
        super(env, "actionuri", apiKey);
    }
}

export default ActionUriEndpoint;