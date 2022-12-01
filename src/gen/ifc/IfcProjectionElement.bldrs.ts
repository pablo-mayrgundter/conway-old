
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprojectionelement.htm
 */
export default class IfcProjectionElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProjectionElement';

    public readonly __version__: number = 0;


}

export class IfcProjectionElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProjectionElement';

    public readonly required: string[] = [ 'IfcFeatureElementAddition', 'IfcFeatureElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
