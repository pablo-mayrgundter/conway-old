import SchemaSpecification from "./schema_specification";
import { ComponentTypeNames } from "./schema_specification";

export type ComponentTypeName< T > = T extends ComponentSet< infer K, infer MS > ? K & ComponentTypeNames< MS > : never; 

export default interface ComponentSet< K extends ComponentTypeNames< T >, T extends SchemaSpecification >
{
    readonly __type__ : K;

    readonly __version__: number;
}
