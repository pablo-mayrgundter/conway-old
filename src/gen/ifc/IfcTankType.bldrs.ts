
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcTankTypeEnum} from "./IfcTankTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctanktype.htm
 */
export default class IfcTankType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTankType';

    public readonly __version__: number = 0;

	PredefinedType : IfcTankTypeEnum;

}

export class IfcTankTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTankType';

    public readonly required: string[] = [ 'IfcFlowStorageDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTankTypeEnum'
		}
    ];
}
