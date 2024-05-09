import Action from "../constants/action";
import Routes from "../constants/routes";
import Environment from "../environment";
import { FilterGroup } from "../models";
import Endpoint from "./endpoint";

class FilterGroupEndpoint extends Endpoint {

    constructor(env: Environment | string, apiKey: string) {
        super(env, apiKey);
    }

    getAll = () => super.get<FilterGroup>(Routes.FilterGroup);
    create = (item: FilterGroup) => super.execute(Routes.FilterGroup, Action.Create, item);
    update = (item: FilterGroup) => super.execute(Routes.FilterGroup, Action.Update, item);
    delete = (item: FilterGroup) => super.execute(Routes.FilterGroup, Action.Delete, item);
}

export default FilterGroupEndpoint;