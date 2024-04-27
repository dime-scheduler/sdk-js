import axios from 'axios';
import Endpoint from './endpoint';
import Environment from '../environment';
import { Severity } from '../models/constants/severity';
import Message from '../models/message';

class MessageEndpoint extends Endpoint<Message> {
    constructor(env: Environment, apiKey: string) {
        super(env, "message", apiKey);
    }

    async processAsync(text: string, severity: Severity, user?: string): Promise<void> {
        const params = {
            Text: text,
            User: user,
            Severity: severity
        };

        const body = JSON.stringify(params);

        const headers = {
            'X-API-KEY': this.apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        const url = this.uri + '/message';
        await axios.post(url, body, { headers: headers });
    }
}

export default MessageEndpoint;