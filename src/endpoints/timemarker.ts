import Environment from "../environment";
import { TimeMarker } from "../models";
import Endpoint from "./endpoint";

class TimeMarkerEndpoint extends Endpoint<TimeMarker> {

    constructor(env: Environment, apiKey: string) {
        super(env, "timeMarker", apiKey);
    }
}

export default TimeMarkerEndpoint;