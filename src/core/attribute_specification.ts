export default interface AttributeSpecification
{
    readonly name: string;

    readonly isCollection: boolean;

    readonly rank: number;

    readonly baseType: string;

  //  readonly isReference: boolean;
}