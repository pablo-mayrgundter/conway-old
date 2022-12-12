
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowmovingdevicetype.htm
 */
export default class IfcFlowMovingDeviceType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFlowMovingDeviceType';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcFlowMovingDeviceTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowMovingDeviceType';

    public readonly required: string[] = [ 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}