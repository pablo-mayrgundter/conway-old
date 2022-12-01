
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcWasteTerminalTypeEnum} from "./IfcWasteTerminalTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwasteterminaltype.htm
 */
export default class IfcWasteTerminalType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcWasteTerminalType';

    public readonly __version__: number = 0;

	PredefinedType : IfcWasteTerminalTypeEnum;

}

export class IfcWasteTerminalTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcWasteTerminalType';

    public readonly required: string[] = [ 'IfcFlowTerminalType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcWasteTerminalTypeEnum'
		}
    ];
}
