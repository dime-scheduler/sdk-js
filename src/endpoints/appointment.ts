import Action from "../constants/action";
import Routes from "../constants/routes";
import Environment from "../environment";
import { Appointment } from "../models";
import Endpoint from "./endpoint";

class AppointmentEndpoint extends Endpoint {

    constructor(env: Environment, apiKey: string) {
        super(env, apiKey);
    }

    create = (item: Appointment) => super.execute(Routes.Appointment, Action.Create, item);
    update = (item: Appointment) => super.execute(Routes.Appointment, Action.Update, item);
    delete = (item: Appointment) => super.execute(Routes.Appointment, Action.Delete, item);
}

export default AppointmentEndpoint;