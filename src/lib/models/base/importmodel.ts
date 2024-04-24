export default abstract class ImportModel {
    procedureName: string;

    constructor(procedureName: string) {
        this.procedureName = procedureName;
    }

    toImportRequest(): Record<string, any> {
        const json: Record<string, any> = {
            "StoredProcedureName": this.procedureName,
            ParameterNames: [],
            ParameterValues: []
        };

        const propertyNames = Object.getOwnPropertyNames(this);
        for (const propertyName of propertyNames) {
            const customName = Reflect.getMetadata("customPropertyName", this, propertyName);
            if (customName) {
                json.ParameterNames.push(customName);
                json.ParameterValues.push((this[propertyName as keyof this] as any)?.toString() ?? propertyName);
            }
        }

        console.log(json);
        return json;
    }
}