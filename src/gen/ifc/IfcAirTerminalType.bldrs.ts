
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcAirTerminalTypeEnum} from "./IfcAirTerminalTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcairterminaltype.htm
 */
export default class IfcAirTerminalType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAirTerminalType';

    public readonly __version__: number = 0;

	PredefinedType : IfcAirTerminalTypeEnum;

}

export class IfcAirTerminalTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAirTerminalType';

    public readonly required: string[] = [ 'IfcFlowTerminalType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAirTerminalTypeEnum'
		}
    ];
}
