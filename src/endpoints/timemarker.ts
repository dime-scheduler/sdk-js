import Action from "../constants/action";
import Routes from "../constants/routes";
import Environment from "../environment";
import { TimeMarker } from "../models";
import Endpoint from "./endpoint";

class TimeMarkerEndpoint extends Endpoint {

    constructor(env: Environment, apiKey: string) {
        super(env, apiKey);
    }

    getAll = () => super.get(Routes.TimeMarker);
    create = (item: TimeMarker) => super.execute(Routes.TimeMarker, Action.Create, item);
    update = (item: TimeMarker) => super.execute(Routes.TimeMarker, Action.Update, item);
    delete = (item: TimeMarker) => super.execute(Routes.TimeMarker, Action.Delete, item);
}

export default TimeMarkerEndpoint;