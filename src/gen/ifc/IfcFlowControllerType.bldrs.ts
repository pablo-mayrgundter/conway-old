
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowcontrollertype.htm
 */
export default class IfcFlowControllerType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFlowControllerType';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcFlowControllerTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowControllerType';

    public readonly required: string[] = [ 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
