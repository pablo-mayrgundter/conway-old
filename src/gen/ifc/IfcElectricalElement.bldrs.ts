
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricalelement.htm
 */
export default class IfcElectricalElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcElectricalElement';

    public readonly __version__: number = 0;


}

export class IfcElectricalElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElectricalElement';

    public readonly required: string[] = [ 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
