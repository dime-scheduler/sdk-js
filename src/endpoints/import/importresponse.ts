class ImportResponse {

    static fromRawJson(jsonString: string): ImportResponse {
        const json = JSON.parse(jsonString);
        return new ImportResponse({
            success: json.Success,
            message: json.Description ?? json.Message
        })
    }

    public constructor(init?: Partial<ImportResponse>) {
        Object.assign(this, init);
    }

    success!: boolean;
    message?: string;
}

export default ImportResponse;