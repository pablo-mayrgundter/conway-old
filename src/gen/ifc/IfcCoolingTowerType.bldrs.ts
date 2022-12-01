
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcCoolingTowerTypeEnum} from "./IfcCoolingTowerTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccoolingtowertype.htm
 */
export default class IfcCoolingTowerType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCoolingTowerType';

    public readonly __version__: number = 0;

	PredefinedType : IfcCoolingTowerTypeEnum;

}

export class IfcCoolingTowerTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCoolingTowerType';

    public readonly required: string[] = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCoolingTowerTypeEnum'
		}
    ];
}
