export default abstract class ImportModel {
    protected createAppendRequest(procedureName: string): Record<string, any> {
        const json: Record<string, any> = {
            "StoredProcedureName": procedureName,
            ParameterNames: [],
            ParameterValues: []
        };

        const propertyNames = Object.getOwnPropertyNames(this);
        for (const propertyName of propertyNames.filter(x => Reflect.hasMetadata("importPropertyName", this, x))) {
            const importProperty = Reflect.getMetadata("importPropertyName", this, propertyName);
            json.ParameterNames.push(importProperty ? importProperty : propertyName);
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
        for (const propertyName of propertyNames.filter(x => Reflect.hasMetadata("importPropertyName", this, x))) {
            const deleteProperty = Reflect.getMetadata("deleteProperty", this, propertyName);
            if (deleteProperty) {
                const importProperty = Reflect.getMetadata("importPropertyName", this, propertyName);
                json.ParameterNames.push(importProperty ? importProperty : propertyName);
                json.ParameterValues.push(this.formatValue(this[propertyName as keyof this] as any));
            }
        }

        return json;
    }

    private formatValue(val: any): string {
        if (val instanceof Date)
            return val?.toISOString();
        else if (typeof (val) == "string")
            return val?.toString() ?? "";

        return val?.toString() ?? null;
    }
}