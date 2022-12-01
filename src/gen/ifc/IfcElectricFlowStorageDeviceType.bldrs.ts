
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcElectricFlowStorageDeviceTypeEnum} from "./IfcElectricFlowStorageDeviceTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricflowstoragedevicetype.htm
 */
export default class IfcElectricFlowStorageDeviceType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcElectricFlowStorageDeviceType';

    public readonly __version__: number = 0;

	PredefinedType : IfcElectricFlowStorageDeviceTypeEnum;

}

export class IfcElectricFlowStorageDeviceTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElectricFlowStorageDeviceType';

    public readonly required: string[] = [ 'IfcFlowStorageDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElectricFlowStorageDeviceTypeEnum'
		}
    ];
}
