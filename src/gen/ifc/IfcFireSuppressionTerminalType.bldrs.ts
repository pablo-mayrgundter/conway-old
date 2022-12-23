
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcFireSuppressionTerminalTypeEnum from "./IfcFireSuppressionTerminalTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfiresuppressionterminaltype.htm
 */
export default class IfcFireSuppressionTerminalType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFireSuppressionTerminalType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcFireSuppressionTerminalTypeSpecification = IfcFireSuppressionTerminalTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcFireSuppressionTerminalTypeEnum  ) {}
}

export class IfcFireSuppressionTerminalTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFireSuppressionTerminalType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowTerminalType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFireSuppressionTerminalTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFireSuppressionTerminalTypeSpecification = new IfcFireSuppressionTerminalTypeSpecification();
}
