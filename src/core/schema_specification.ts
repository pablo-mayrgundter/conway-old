import ComponentSpecification from "./component_specification";

export default interface SchemaSpecification
{
    name: string;

    /* Narrow this on override to a string union list type of the component names.
     */
    components: ReadonlyArray< string >;

    specifications: ReadonlyMap< string, ComponentSpecification >;
}

export type ArrayElement<ArrayType> = ArrayType extends readonly (infer ElementType)[] ? ( ElementType extends string ? ElementType : never ): never;

export type ComponentTypeNames< T extends SchemaSpecification > = ArrayElement< T['components'] >;