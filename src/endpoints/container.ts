import Environment from "../environment";
import { Container } from "../models";
import Endpoint from "./endpoint";

class ContainerEndpoint extends Endpoint<Container> {

    constructor(env: Environment, apiKey: string) {
        super(env, "container", apiKey);
    }
}

export default ContainerEndpoint;