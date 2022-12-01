
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcAirTerminalBoxTypeEnum} from "./IfcAirTerminalBoxTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcairterminalboxtype.htm
 */
export default class IfcAirTerminalBoxType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAirTerminalBoxType';

    public readonly __version__: number = 0;

	PredefinedType : IfcAirTerminalBoxTypeEnum;

}

export class IfcAirTerminalBoxTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAirTerminalBoxType';

    public readonly required: string[] = [ 'IfcFlowControllerType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAirTerminalBoxTypeEnum'
		}
    ];
}
