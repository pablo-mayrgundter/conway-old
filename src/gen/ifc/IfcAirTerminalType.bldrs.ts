
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAirTerminalTypeEnum from "./IfcAirTerminalTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcairterminaltype.htm
 */
export default class IfcAirTerminalType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAirTerminalType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcAirTerminalTypeSpecification = IfcAirTerminalTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcAirTerminalTypeEnum  ) {}
}

export class IfcAirTerminalTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAirTerminalType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowTerminalType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAirTerminalTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAirTerminalTypeSpecification = new IfcAirTerminalTypeSpecification();
}
