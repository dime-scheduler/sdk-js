import Action from "../constants/action";
import Routes from "../constants/routes";
import Environment from "../environment";
import { User } from "../models";
import Endpoint from "./endpoint";

class UserEndpoint extends Endpoint {

    constructor(env: Environment, apiKey: string) {
        super(env, apiKey);
    }

    create = (item: User) => super.execute(Routes.User, Action.Create, item);
    update = (item: User) => super.execute(Routes.User, Action.Update, item);
    delete = (item: User) => super.execute(Routes.User, Action.Delete, item);
}

export default UserEndpoint;