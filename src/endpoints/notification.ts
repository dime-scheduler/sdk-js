import Environment from "../environment";
import Endpoint from "./endpoint";
import { Notification } from "../models";
import Action from "../constants/action";
import Routes from "../constants/routes";

class NotificationEndpoint extends Endpoint {

    constructor(env: Environment | string, apiKey: string) {
        super(env, apiKey);
    }

    create = (item: Notification) => super.execute(Routes.Notification, Action.Create, item);
    update = (item: Notification) => super.execute(Routes.Notification, Action.Update, item);
    delete = (item: Notification) => super.execute(Routes.Notification, Action.Delete, item);
}

export default NotificationEndpoint;