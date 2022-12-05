
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcCooledBeamTypeEnum from "./IfcCooledBeamTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccooledbeamtype.htm
 */
export default class IfcCooledBeamType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCooledBeamType';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcCooledBeamTypeEnum  ) {}
}

export class IfcCooledBeamTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCooledBeamType';

    public readonly required: string[] = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCooledBeamTypeEnum'
		}
    ];
}
