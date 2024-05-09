import Action from "../constants/action";
import Routes from "../constants/routes";
import Environment from "../environment";
import { Job } from "../models";
import Endpoint from "./endpoint";

class JobEndpoint extends Endpoint {

    constructor(env: Environment | string, apiKey: string) {
        super(env, apiKey);
    }

    create = (item: Job) => super.execute(Routes.Job, Action.Create, item);
    update = (item: Job) => super.execute(Routes.Job, Action.Update, item);
    delete = (item: Job) => super.execute(Routes.Job, Action.Delete, item);
}

export default JobEndpoint;