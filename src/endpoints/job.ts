import Environment from "../environment";
import { Job } from "../models";
import Endpoint from "./endpoint";

class JobEndpoint extends Endpoint<Job> {

    constructor(env: Environment, apiKey: string) {
        super(env, "job", apiKey);
    }
}

export default JobEndpoint;