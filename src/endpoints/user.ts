import Environment from "../environment";
import { User } from "../models";
import Endpoint from "./endpoint";

class UserEndpoint extends Endpoint<User> {

    constructor(env: Environment, apiKey: string) {
        super(env, "user", apiKey);
    }
}

export default UserEndpoint;