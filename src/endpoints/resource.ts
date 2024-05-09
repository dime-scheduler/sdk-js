import Action from "../constants/action";
import Routes from "../constants/routes";
import Environment from "../environment";
import { Resource, ResourceGpsTracking, ResourceCalendar, ResourceCapacity, ResourceFilterValue, ResourceUri } from "../models";
import Page from "../models/page";
import Endpoint from "./endpoint";

class ResourceEndpoint extends Endpoint {

    constructor(env: Environment | string, apiKey: string) {
        super(env, apiKey);
    }

    getAll = () => super.get<Resource>(Routes.Resource);
    create = (item: Resource) => super.execute(Routes.Resource, Action.Create, item);
    update = (item: Resource) => super.execute(Routes.Resource, Action.Update, item);

    createLocation = (item: ResourceGpsTracking) => super.execute(Routes.ResourceGpsTracking, Action.Create, item);
    updateLocation = (item: ResourceGpsTracking) => super.execute(Routes.ResourceGpsTracking, Action.Update, item);

    createCalendar = (item: ResourceCalendar) => super.execute(Routes.ResourceCalendar, Action.Create, item);
    updateCalendar = (item: ResourceCalendar) => super.execute(Routes.ResourceCalendar, Action.Update, item);
    deleteCalendar = (item: ResourceCalendar) => super.execute(Routes.ResourceCalendar, Action.Delete, item);

    getCapacity = (page: number, limit: number, sort?: string, group?: string, filter?: string) => super.get<Page<ResourceCapacity>>(Routes.ResourceCapacity, { page, limit, sort, group, filter });
    createCapacity = (item: ResourceCapacity) => super.execute(Routes.ResourceCapacity, Action.Create, item);
    updateCapacity = (item: ResourceCapacity) => super.execute(Routes.ResourceCapacity, Action.Update, item);

    createFilterValue = (item: ResourceFilterValue) => super.execute(Routes.ResourceFilterValue, Action.Create, item);
    updateFilterValue = (item: ResourceFilterValue) => super.execute(Routes.ResourceFilterValue, Action.Update, item);
    deleteFilterValue = (item: ResourceFilterValue) => super.execute(Routes.ResourceFilterValue, Action.Delete, item);

    createUri = (item: ResourceUri) => super.execute(Routes.ResourceUri, Action.Create, item);
    updateUri = (item: ResourceUri) => super.execute(Routes.ResourceUri, Action.Update, item);
    deleteUri = (item: ResourceUri) => super.execute(Routes.ResourceUri, Action.Delete, item);
}

export default ResourceEndpoint;