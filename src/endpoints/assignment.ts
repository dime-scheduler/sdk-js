import Action from "../constants/action";
import Routes from "../constants/routes";
import Environment from "../environment";
import { Assignment } from "../models";
import Endpoint from "./endpoint";

class AssignmentEndpoint extends Endpoint {

    constructor(env: Environment, apiKey: string) {
        super(env, apiKey);
    }

    create = (item: Assignment) => super.execute(Routes.Assignment, Action.Create, item);
    update = (item: Assignment) => super.execute(Routes.Assignment, Action.Update, item);
    delete = (item: Assignment) => super.execute(Routes.Assignment, Action.Delete, item);
}

export default AssignmentEndpoint;