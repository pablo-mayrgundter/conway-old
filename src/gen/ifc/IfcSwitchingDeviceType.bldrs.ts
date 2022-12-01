
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcSwitchingDeviceTypeEnum} from "./IfcSwitchingDeviceTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcswitchingdevicetype.htm
 */
export default class IfcSwitchingDeviceType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSwitchingDeviceType';

    public readonly __version__: number = 0;

	PredefinedType : IfcSwitchingDeviceTypeEnum;

}

export class IfcSwitchingDeviceTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSwitchingDeviceType';

    public readonly required: string[] = [ 'IfcFlowControllerType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSwitchingDeviceTypeEnum'
		}
    ];
}
