
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcSanitaryTerminalTypeEnum from "./IfcSanitaryTerminalTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsanitaryterminaltype.htm
 */
export default class IfcSanitaryTerminalType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSanitaryTerminalType';

    public readonly __version__: number = 0;

    constructor( public readonly PredefinedType : IfcSanitaryTerminalTypeEnum  ) {}
}

export class IfcSanitaryTerminalTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSanitaryTerminalType';

    public readonly required: string[] = [ 'IfcFlowTerminalType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSanitaryTerminalTypeEnum'
		}
    ];
}
