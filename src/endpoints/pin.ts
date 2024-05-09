import Action from "../constants/action";
import Routes from "../constants/routes";
import Environment from "../environment";
import { Pin } from "../models";
import Endpoint from "./endpoint";

class PinEndpoint extends Endpoint {

    constructor(env: Environment | string, apiKey: string) {
        super(env, apiKey);
    }

    getAll = () => super.get<Pin>(Routes.Pin);
    create = (item: Pin) => super.execute(Routes.Pin, Action.Create, item);
    update = (item: Pin) => super.execute(Routes.Pin, Action.Update, item);
    delete = (item: Pin) => super.execute(Routes.Pin, Action.Delete, item);
}

export default PinEndpoint;