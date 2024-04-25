export default abstract class ImportModel {
    protected createAppendRequest(procedureName: string): Record<string, any> {
        const json: Record<string, any> = {
            "StoredProcedureName": procedureName,
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

        return json;
    }

    protected createDeleteRequest(procedureName: string): Record<string, any> {
        const json: Record<string, any> = {
            "StoredProcedureName": procedureName,
            ParameterNames: [],
            ParameterValues: []
        };

        const propertyNames = Object.getOwnPropertyNames(this);
        for (const propertyName of propertyNames) {
            const customName = Reflect.getMetadata("deleteProperty", this, propertyName);
            if (customName) {
                json.ParameterNames.push(customName);
                json.ParameterValues.push((this[propertyName as keyof this] as any)?.toString() ?? propertyName);
            }
        }

        return json;
    }
}