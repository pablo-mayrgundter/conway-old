
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcStackTerminalTypeEnum} from "./IfcStackTerminalTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstackterminaltype.htm
 */
export default class IfcStackTerminalType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStackTerminalType';

    public readonly __version__: number = 0;

	PredefinedType : IfcStackTerminalTypeEnum;

}

export class IfcStackTerminalTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStackTerminalType';

    public readonly required: string[] = [ 'IfcFlowTerminalType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStackTerminalTypeEnum'
		}
    ];
}
