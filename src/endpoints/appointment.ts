import Environment from "../environment";
import { Appointment } from "../models";
import Endpoint from "./endpoint";

class AppointmentEndpoint extends Endpoint<Appointment> {

    constructor(env: Environment, apiKey: string) {
        super(env, "appointment", apiKey);
    }
}

export default AppointmentEndpoint;