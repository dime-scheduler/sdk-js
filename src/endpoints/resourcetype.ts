import Routes from "../constants/routes";
import Environment from "../environment";
import { ResourceType } from "../models";
import Endpoint from "./endpoint";

class ResourceTypeEndpoint extends Endpoint {

    constructor(env: Environment | string, apiKey: string) {
        super(env, apiKey);
    }

    getAll = () => super.get<ResourceType>(Routes.ResourceType);
}

export default ResourceTypeEndpoint;