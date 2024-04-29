import { ShowAs } from "./showas";
import { Sensitivity } from "./sensitivity";

export default class ExchangeAppointment {
    appointmentId?: number;
    appointmentGuid?: string | null;
    appointmentNo?: string;
    exchangeId?: string;
    iCalUId?: string;
    start?: string;
    end?: string;
    subject?: string;
    body?: string;
    importance?: number;
    resourceEmail?: string;
    showAs?: ShowAs;
    sensitivity?: Sensitivity;
    categories?: string[];
}