import Action from "../constants/action";
import Routes from "../constants/routes";
import Environment from "../environment";
import { Task, TaskContainer, TaskFilterValue, TaskLocked, TaskUri } from "../models";
import Endpoint from "./endpoint";

class TaskEndpoint extends Endpoint {

    constructor(env: Environment, apiKey: string) {
        super(env, apiKey);
    }

    create = (item: Task) => super.execute(Routes.Task, Action.Create, item);
    update = (item: Task) => super.execute(Routes.Task, Action.Update, item);
    delete = (item: Task) => super.execute(Routes.Task, Action.Delete, item);

    createContainer = (item: TaskContainer) => super.execute(Routes.TaskContainer, Action.Create, item);
    updateContainer = (item: TaskContainer) => super.execute(Routes.TaskContainer, Action.Update, item);
    deleteContainer = (item: TaskContainer) => super.execute(Routes.TaskContainer, Action.Delete, item);

    setLocked = (item: TaskLocked) => super.execute(Routes.TaskLocked, Action.Create, item);

    createFilterValue = (item: TaskFilterValue) => super.execute(Routes.TaskFilterValue, Action.Create, item);
    updateFilterValue = (item: TaskFilterValue) => super.execute(Routes.TaskFilterValue, Action.Update, item);
    deleteFilterValue = (item: TaskFilterValue) => super.execute(Routes.TaskFilterValue, Action.Delete, item);

    createUri = (item: TaskUri) => super.execute(Routes.TaskUri, Action.Create, item);
    updateUri = (item: TaskUri) => super.execute(Routes.TaskUri, Action.Update, item);
    deleteUri = (item: TaskUri) => super.execute(Routes.TaskUri, Action.Delete, item);
}

export default TaskEndpoint;