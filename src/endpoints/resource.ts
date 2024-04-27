import Environment from "../environment";
import { Resource } from "../models";
import Endpoint from "./endpoint";

class ResourceEndpoint extends Endpoint<Resource> {

    constructor(env: Environment, apiKey: string) {
        super(env, "resource", apiKey);
    }
}

export default ResourceEndpoint;