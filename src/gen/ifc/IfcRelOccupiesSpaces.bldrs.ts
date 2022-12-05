
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreloccupiesspaces.htm
 */
export default class IfcRelOccupiesSpaces implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelOccupiesSpaces';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcRelOccupiesSpacesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelOccupiesSpaces';

    public readonly required: string[] = [ 'IfcRelAssignsToActor', 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
