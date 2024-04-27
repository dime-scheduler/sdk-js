import ActionUriEndpoint from './endpoints/actionuri';
import AppointmentEndpoint from './endpoints/appointment';
import CaptionEndpoint from './endpoints/caption';
import CategoryEndpoint from './endpoints/category';
import ConnectorEndpoint from './endpoints/connector';
import ContainerEndpoint from './endpoints/container';
import FilterGroupEndpoint from './endpoints/filtergroup';
import FilterValueEndpoint from './endpoints/filtervalue';
import ImportEndpoint, { ImportResponse } from './endpoints/import';
import JobEndpoint from './endpoints/job';
import MessageEndpoint from './endpoints/message';
import NotificationEndpoint from './endpoints/notification';
import PinEndpoint from './endpoints/pin';
import ResourceEndpoint from './endpoints/resource';
import TaskEndpoint from './endpoints/task';
import TimeMarkerEndpoint from './endpoints/timemarker';
import UserEndpoint from './endpoints/user';
import Environment from './environment';
import IImportModel from './models/base/iimportmodel';
import { Severity } from './models/constants/severity';

class DimeSchedulerClient {
    private importEndpoint: ImportEndpoint;
    private messages: MessageEndpoint;
    actionUris: ActionUriEndpoint;
    appointments: AppointmentEndpoint;
    captions: CaptionEndpoint;
    categorys: CategoryEndpoint;
    connectors: ConnectorEndpoint;
    containers: ContainerEndpoint;
    filterGroups: FilterGroupEndpoint;
    filterValues: FilterValueEndpoint;
    jobs: JobEndpoint;
    notifications: NotificationEndpoint;
    pins: PinEndpoint;
    resources: ResourceEndpoint;
    tasks: TaskEndpoint;
    timeMarkers: TimeMarkerEndpoint;
    users: UserEndpoint;

    constructor(apiKey: string, env: Environment = Environment.Production) {
        this.importEndpoint = new ImportEndpoint(env, apiKey);
        this.messages = new MessageEndpoint(env, apiKey);
        this.actionUris = new ActionUriEndpoint(env, apiKey);
        this.appointments = new AppointmentEndpoint(env, apiKey);
        this.captions = new CaptionEndpoint(env, apiKey);
        this.categorys = new CategoryEndpoint(env, apiKey);
        this.connectors = new ConnectorEndpoint(env, apiKey);
        this.containers = new ContainerEndpoint(env, apiKey);
        this.filterGroups = new FilterGroupEndpoint(env, apiKey);
        this.filterValues = new FilterValueEndpoint(env, apiKey);
        this.jobs = new JobEndpoint(env, apiKey);
        this.notifications = new NotificationEndpoint(env, apiKey);
        this.pins = new PinEndpoint(env, apiKey);
        this.resources = new ResourceEndpoint(env, apiKey);
        this.tasks = new TaskEndpoint(env, apiKey);
        this.timeMarkers = new TimeMarkerEndpoint(env, apiKey);
        this.users = new UserEndpoint(env, apiKey);
    }

    import(importable: IImportModel | Array<IImportModel>, append: boolean = true): Promise<ImportResponse> {
        return this.importEndpoint.processAsync(importable, append);
    }

    sendMessage(text: string, severity: Severity, user?: string): Promise<void> {
        return this.messages.processAsync(text, severity, user);
    }
}

export default DimeSchedulerClient;