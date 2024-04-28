import Action from "../constants/action";
import Routes from "../constants/routes";
import Environment from "../environment";
import { Caption } from "../models";
import Endpoint from "./endpoint";

class CaptionEndpoint extends Endpoint {

    constructor(env: Environment, apiKey: string) {
        super(env, apiKey);
    }

    create = (item: Caption) => super.execute(Routes.Caption, Action.Create, item);
    update = (item: Caption) => super.execute(Routes.Caption, Action.Update, item);
}

export default CaptionEndpoint;