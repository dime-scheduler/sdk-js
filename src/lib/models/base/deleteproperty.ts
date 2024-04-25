import "reflect-metadata";

export default function DeleteProperty() {
    return function (target: any, propertyKey: any) {
        Reflect.defineMetadata("deleteProperty", true, target, propertyKey);
    };
}