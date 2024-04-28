import Action from "../constants/action";
import Routes from "../constants/routes";
import Environment from "../environment";
import { Appointment, AppointmentCategory, AppointmentContainer, AppointmentContent, AppointmentImportance, AppointmentLocked, AppointmentPlanningQuantity, AppointmentTimeMarker, AppointmentUri } from "../models";
import Endpoint from "./endpoint";

class AppointmentEndpoint extends Endpoint {

    constructor(env: Environment, apiKey: string) {
        super(env, apiKey);
    }

    create = (item: Appointment) => super.execute(Routes.Appointment, Action.Create, item);
    update = (item: Appointment) => super.execute(Routes.Appointment, Action.Update, item);
    delete = (item: Appointment) => super.execute(Routes.Appointment, Action.Delete, item);

    createContainer = (item: AppointmentContainer) => super.execute(Routes.AppointmentContainer, Action.Create, item);
    updateContainer = (item: AppointmentContainer) => super.execute(Routes.AppointmentContainer, Action.Update, item);
    deleteContainer = (item: AppointmentContainer) => super.execute(Routes.AppointmentContainer, Action.Delete, item);

    setCategory = (item: AppointmentCategory) => super.execute(Routes.Appointment, Action.Create, item);
    setContent = (item: AppointmentContent) => super.execute(Routes.AppointmentContent, Action.Create, item);
    setImportance = (item: AppointmentImportance) => super.execute(Routes.AppointmentImportance, Action.Create, item);
    setLocked = (item: AppointmentLocked) => super.execute(Routes.AppointmentLocked, Action.Create, item);
    setPlanningQuantity = (item: AppointmentPlanningQuantity) => super.execute(Routes.AppointmentPlanningQuantity, Action.Create, item);
    setTimeMarker = (item: AppointmentTimeMarker) => super.execute(Routes.AppointmentTimeMarker, Action.Create, item);

    createUri = (item: AppointmentUri) => super.execute(Routes.AppointmentUri, Action.Create, item);
    updateUri = (item: AppointmentUri) => super.execute(Routes.AppointmentUri, Action.Update, item);
    deleteUri = (item: AppointmentUri) => super.execute(Routes.AppointmentUri, Action.Delete, item);
}

export default AppointmentEndpoint;