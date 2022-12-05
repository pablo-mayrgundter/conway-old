
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcFlowMeterTypeEnum from "./IfcFlowMeterTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowmetertype.htm
 */
export default class IfcFlowMeterType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFlowMeterType';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcFlowMeterTypeEnum  ) {}
}

export class IfcFlowMeterTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowMeterType';

    public readonly required: string[] = [ 'IfcFlowControllerType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFlowMeterTypeEnum'
		}
    ];
}
