
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcMotorConnectionTypeEnum from "./IfcMotorConnectionTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmotorconnectiontype.htm
 */
export default class IfcMotorConnectionType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMotorConnectionType';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcMotorConnectionTypeEnum  ) {}
}

export class IfcMotorConnectionTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMotorConnectionType';

    public readonly required: string[] = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMotorConnectionTypeEnum'
		}
    ];
}