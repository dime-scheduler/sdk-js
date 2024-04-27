import Environment from "../environment";
import { FilterValue } from "../models";
import Endpoint from "./endpoint";

class FilterValueEndpoint extends Endpoint<FilterValue> {

    constructor(env: Environment, apiKey: string) {
        super(env, "filterValue", apiKey);
    }
}

export default FilterValueEndpoint;