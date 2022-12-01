
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributionflowelementtype.htm
 */
export default class IfcDistributionFlowElementType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDistributionFlowElementType';

    public readonly __version__: number = 0;


}

export class IfcDistributionFlowElementTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDistributionFlowElementType';

    public readonly required: string[] = [ 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
