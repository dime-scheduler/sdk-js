import Endpoint from './endpoint';

class ImportEndPoint extends Endpoint {
    constructor(uri: any, authn: any) {
        super(uri, authn);
    }

    async processAsync(importable: { toImportRequest: () => any; }) {
        return super.insert(importable.toImportRequest());
    }
}

export default ImportEndPoint;