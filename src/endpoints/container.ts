import Action from "../constants/action";
import Routes from "../constants/routes";
import Environment from "../environment";
import { Container } from "../models";
import Endpoint from "./endpoint";

class ContainerEndpoint extends Endpoint {

    constructor(env: Environment | string, apiKey: string) {
        super(env, apiKey);
    }

    getAll = () => super.get<Container>(Routes.Container);
    create = (item: Container) => super.execute(Routes.Container, Action.Create, item);
    update = (item: Container) => super.execute(Routes.Container, Action.Update, item);
    delete = (item: Container) => super.execute(Routes.Container, Action.Delete, item);
}

export default ContainerEndpoint;