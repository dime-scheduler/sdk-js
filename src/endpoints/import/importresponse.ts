class ImportResponse {

    static fromRawJson(jsonString: string): ImportResponse {
        const json = JSON.parse(jsonString);      
        return new ImportResponse({
            success: json?.Success ?? json.Error == null,
            message: json.Description ?? json.Message ?? json.Error,
            appointments: (json.Appointments ?? []).map((x: any) => x.Id)
        })
    }

    public constructor(init?: Partial<ImportResponse>) {
        Object.assign(this, init);
    }

    success!: boolean;
    message?: string;
    appointments?: Array<number>
}
export default ImportResponse;