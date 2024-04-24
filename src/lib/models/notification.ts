
export default class Notification {
    sourceApp?: string;
    sourceType?: string;
    appointmentId?: number | null;
    appointmentNo?: string;
    connectorId?: string;
    type?: number;
    code?: string;
    text?: string;
    date?: string | null;
    jobNo?: string;
    taskNo?: string;
    appointmentGuid?: string | null;
    sentFromBackOffice?: boolean;
}