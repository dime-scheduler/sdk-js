class EndPoint {
    authn: any;
    uri: string;

    constructor(uri: any, authn: any) {
        this.uri = uri;
        this.authn = authn;
    }    
}

export default EndPoint;