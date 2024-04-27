import Environment from "../environment";
import { Caption } from "../models";
import Endpoint from "./endpoint";

class CaptionEndpoint extends Endpoint<Caption> {

    constructor(env: Environment, apiKey: string) {
        super(env, "caption", apiKey);
    }
}

export default CaptionEndpoint;