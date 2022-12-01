
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfurnishingelement.htm
 */
export default class IfcFurnishingElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFurnishingElement';

    public readonly __version__: number = 0;


}

export class IfcFurnishingElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFurnishingElement';

    public readonly required: string[] = [ 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
