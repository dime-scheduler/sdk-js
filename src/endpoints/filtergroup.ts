import Environment from "../environment";
import { FilterGroup } from "../models";
import Endpoint from "./endpoint";

class FilterGroupEndpoint extends Endpoint<FilterGroup> {

    constructor(env: Environment, apiKey: string) {
        super(env, "filtergroup", apiKey);
    }
}

export default FilterGroupEndpoint;