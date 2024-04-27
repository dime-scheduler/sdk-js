import Environment from "../environment";
import { Category } from "../models";
import Endpoint from "./endpoint";

class CategoryEndpoint extends Endpoint<Category> {

    constructor(env: Environment, apiKey: string) {
        super(env, "category", apiKey);
    }
}

export default CategoryEndpoint;