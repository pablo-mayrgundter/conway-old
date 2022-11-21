
export default interface ModelSpecification
{
    /* Narrow this on override to a string union list type of the component names.
     */
    components: string[];
}

export type ArrayElement<ArrayType> = ArrayType extends readonly (infer ElementType)[] ? ( ElementType extends string ? ElementType : never ): never;

export type ComponentTypeNames< T extends ModelSpecification > = ArrayElement< T['components'] >;