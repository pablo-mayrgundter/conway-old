
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcGasTerminalTypeEnum from "./IfcGasTerminalTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgasterminaltype.htm
 */
export default class IfcGasTerminalType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcGasTerminalType';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcGasTerminalTypeEnum  ) {}
}

export class IfcGasTerminalTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGasTerminalType';

    public readonly required: string[] = [ 'IfcFlowTerminalType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcGasTerminalTypeEnum'
		}
    ];
}
