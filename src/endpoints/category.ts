import Action from "../constants/action";
import Routes from "../constants/routes";
import Environment from "../environment";
import { Category } from "../models";
import Endpoint from "./endpoint";

class CategoryEndpoint extends Endpoint {

    constructor(env: Environment, apiKey: string) {
        super(env, apiKey);
    }

    getAll = () => super.get<Category>(Routes.Category);
    create = (item: Category) => super.execute(Routes.Category, Action.Create, item);
    update = (item: Category) => super.execute(Routes.Category, Action.Update, item);
    delete = (item: Category) => super.execute(Routes.Category, Action.Delete, item);
}

export default CategoryEndpoint;