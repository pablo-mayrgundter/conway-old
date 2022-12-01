
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributionelement.htm
 */
export default class IfcDistributionElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDistributionElement';

    public readonly __version__: number = 0;


}

export class IfcDistributionElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDistributionElement';

    public readonly required: string[] = [ 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
