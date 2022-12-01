
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcElectricMotorTypeEnum} from "./IfcElectricMotorTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricmotortype.htm
 */
export default class IfcElectricMotorType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcElectricMotorType';

    public readonly __version__: number = 0;

	PredefinedType : IfcElectricMotorTypeEnum;

}

export class IfcElectricMotorTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElectricMotorType';

    public readonly required: string[] = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElectricMotorTypeEnum'
		}
    ];
}
