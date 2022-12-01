
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcHeatExchangerTypeEnum} from "./IfcHeatExchangerTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcheatexchangertype.htm
 */
export default class IfcHeatExchangerType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcHeatExchangerType';

    public readonly __version__: number = 0;

	PredefinedType : IfcHeatExchangerTypeEnum;

}

export class IfcHeatExchangerTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcHeatExchangerType';

    public readonly required: string[] = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcHeatExchangerTypeEnum'
		}
    ];
}
