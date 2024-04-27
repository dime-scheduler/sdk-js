import Environment from "../environment";
import { Pin } from "../models";
import Endpoint from "./endpoint";

class PinEndpoint extends Endpoint<Pin> {

    constructor(env: Environment, apiKey: string) {
        super(env, "pin", apiKey);
    }
}

export default PinEndpoint;