import Environment from "../environment";

class EndPoint {
    apiKey: string;
    uri: string;

    constructor(env: Environment, apiKey: string) {
        this.uri = env;
        this.apiKey = apiKey;
    }
}

export default EndPoint;