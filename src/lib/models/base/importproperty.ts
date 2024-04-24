import "reflect-metadata";

export default function ImportProperty(name?: string) {
    return function (target: any, propertyKey: any) {
        Reflect.defineMetadata("customPropertyName", name, target, propertyKey);
    };
}
