
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcStackTerminalTypeEnum from "./IfcStackTerminalTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstackterminaltype.htm
 */
export default class IfcStackTerminalType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStackTerminalType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcStackTerminalTypeSpecification = IfcStackTerminalTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcStackTerminalTypeEnum  ) {}
}

export class IfcStackTerminalTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStackTerminalType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowTerminalType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStackTerminalTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStackTerminalTypeSpecification = new IfcStackTerminalTypeSpecification();
}
