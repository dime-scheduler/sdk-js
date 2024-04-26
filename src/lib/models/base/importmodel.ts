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
            json.ParameterNames.push(customName ?? propertyName);
            json.ParameterValues.push(this.formatValue(this[propertyName as keyof this] as any));
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
            const deleteProperty = Reflect.getMetadata("deleteProperty", this, propertyName);
            if (deleteProperty) {
                const importProperty = Reflect.getMetadata("importPropertyName", this, propertyName);
                json.ParameterNames.push(importProperty ?? propertyName);
                json.ParameterValues.push(this.formatValue(this[propertyName as keyof this] as any));
            }
        }

        return json;
    }

    private formatValue(val:any): string {
        const stringVal = (val instanceof Date) ? val?.toISOString() : val?.toString();
        return stringVal ?? "";
    }
}