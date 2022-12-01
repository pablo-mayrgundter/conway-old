
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLampTypeEnum} from "./IfcLampTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclamptype.htm
 */
export default class IfcLampType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcLampType';

    public readonly __version__: number = 0;

	PredefinedType : IfcLampTypeEnum;

}

export class IfcLampTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLampType';

    public readonly required: string[] = [ 'IfcFlowTerminalType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLampTypeEnum'
		}
    ];
}
