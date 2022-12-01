
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedcolour.htm
 */
export default class IfcPreDefinedColour implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPreDefinedColour';

    public readonly __version__: number = 0;


}

export class IfcPreDefinedColourSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPreDefinedColour';

    public readonly required: string[] = [ 'IfcPreDefinedItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
