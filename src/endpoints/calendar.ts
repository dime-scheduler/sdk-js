import Routes from "../constants/routes";
import Environment from "../environment";
import { Calendar } from "../models";
import Endpoint from "./endpoint";

class CalendarEndpoint extends Endpoint {

    constructor(env: Environment | string, apiKey: string) {
        super(env, apiKey);
    }

    getAll = () => super.get<Calendar>(Routes.Calendars);
}

export default CalendarEndpoint;