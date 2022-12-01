import SchemaSpecification from "./schema_specification";
import { ComponentTypeNames } from "./schema_specification";

export type ComponentTypeName< T > = T extends Component< infer MS > ? T[ '__type__' ] & ComponentTypeNames< MS > : never; 

export default interface Component< T extends SchemaSpecification >
{
    readonly __type__ : ComponentTypeNames< T >;

    readonly __version__: number;
}
