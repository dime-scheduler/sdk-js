import Environment from "../environment";
import { Task } from "../models";
import Endpoint from "./endpoint";

class TaskEndpoint extends Endpoint<Task> {

    constructor(env: Environment, apiKey: string) {
        super(env, "task", apiKey);
    }
}

export default TaskEndpoint;