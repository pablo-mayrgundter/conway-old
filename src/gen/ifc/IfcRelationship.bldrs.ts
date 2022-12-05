
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelationship.htm
 */
export default class IfcRelationship implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelationship';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelationship';

    public readonly required: string[] = [ 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
