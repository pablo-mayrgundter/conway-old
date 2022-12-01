
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcChillerTypeEnum} from "./IfcChillerTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcchillertype.htm
 */
export default class IfcChillerType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcChillerType';

    public readonly __version__: number = 0;

	PredefinedType : IfcChillerTypeEnum;

}

export class IfcChillerTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcChillerType';

    public readonly required: string[] = [ 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcChillerTypeEnum'
		}
    ];
}
