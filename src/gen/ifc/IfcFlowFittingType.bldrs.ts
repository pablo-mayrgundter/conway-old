
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowfittingtype.htm
 */
export default class IfcFlowFittingType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFlowFittingType';

    public readonly __version__: number = 0;


}

export class IfcFlowFittingTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowFittingType';

    public readonly required: string[] = [ 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
