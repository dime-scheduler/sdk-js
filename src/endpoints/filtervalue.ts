import Action from "../constants/action";
import Routes from "../constants/routes";
import Environment from "../environment";
import { FilterValue } from "../models";
import Endpoint from "./endpoint";

class FilterValueEndpoint extends Endpoint {

    constructor(env: Environment, apiKey: string) {
        super(env, apiKey);
    }

    create = (item: FilterValue) => super.execute(Routes.FilterValue, Action.Create, item);
    update = (item: FilterValue) => super.execute(Routes.FilterValue, Action.Update, item);
    delete = (item: FilterValue) => super.execute(Routes.FilterValue, Action.Delete, item);
}

export default FilterValueEndpoint;