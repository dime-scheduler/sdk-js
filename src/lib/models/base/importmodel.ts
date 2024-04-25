export default abstract class ImportModel {
    protected createAppendRequest(procedureName: string): Record<string, any> {
        const json: Record<string, any> = {
            "StoredProcedureName": procedureName,
            ParameterNames: [],
            ParameterValues: []
        };

        const propertyNames = Object.getOwnPropertyNames(this);
        for (const propertyName of propertyNames) {
            const customName = Reflect.getMetadata("importPropertyName", this, propertyName);
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
            const importProperty = Reflect.getMetadata("importPropertyName", this, propertyName);
            const deleteProperty = Reflect.getMetadata("deleteProperty", this, propertyName);
            if (importProperty && deleteProperty) {
                json.ParameterNames.push(importProperty);
                json.ParameterValues.push((this[propertyName as keyof this] as any)?.toString() ?? propertyName);
            }
        }

        return json;
    }
}