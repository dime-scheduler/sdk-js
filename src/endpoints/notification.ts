import Environment from "../environment";
import Endpoint from "./endpoint";
import { Notification } from "../models";

class NotificationEndpoint extends Endpoint<Notification> {

    constructor(env: Environment, apiKey: string) {
        super(env, "notification", apiKey);
    }
}

export default NotificationEndpoint;