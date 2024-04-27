import Action from "../constants/action";
import Routes from "../constants/routes";
import Environment from "../environment";
import { Connector } from "../models";
import Endpoint from "./endpoint";

class ConnectorEndpoint extends Endpoint {

    constructor(env: Environment, apiKey: string) {
        super(env, apiKey);
    }

    create = (item: Connector) => super.execute(Routes.Connector, Action.Create, item);
    update = (item: Connector) => super.execute(Routes.Connector, Action.Update, item);
    delete = (item: Connector) => super.execute(Routes.Connector, Action.Delete, item);
}

export default ConnectorEndpoint;