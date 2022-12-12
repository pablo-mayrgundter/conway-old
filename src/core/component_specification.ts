import AttributeSpecification from "./attribute_specification";

export default interface ComponentSpecification
{
    readonly name: string;

    // Other required component types for this one (can be used to enforce inheritence hierarchy)
    readonly required: string[];

    readonly isAbstract: boolean;

    readonly attributes: AttributeSpecification[];
}