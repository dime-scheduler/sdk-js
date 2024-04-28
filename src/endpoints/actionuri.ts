import Action from "../constants/action";
import Routes from "../constants/routes";
import Environment from "../environment";
import { ActionUri } from "../models";
import Endpoint from "./endpoint";

class ActionUriEndpoint extends Endpoint {

    constructor(env: Environment, apiKey: string) {
        super(env, apiKey);
    }

    create = (item: ActionUri) => super.execute(Routes.ActionUri, Action.Create, item);
    update = (item: ActionUri) => super.execute(Routes.ActionUri, Action.Update, item);
}

export default ActionUriEndpoint;