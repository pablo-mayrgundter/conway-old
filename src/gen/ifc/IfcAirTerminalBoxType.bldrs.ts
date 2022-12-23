
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAirTerminalBoxTypeEnum from "./IfcAirTerminalBoxTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcairterminalboxtype.htm
 */
export default class IfcAirTerminalBoxType implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAirTerminalBoxType';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcAirTerminalBoxTypeSpecification = IfcAirTerminalBoxTypeSpecification.instance;

    constructor( public readonly PredefinedType : IfcAirTerminalBoxTypeEnum  ) {}
}

export class IfcAirTerminalBoxTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAirTerminalBoxType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowControllerType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAirTerminalBoxTypeEnum'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAirTerminalBoxTypeSpecification = new IfcAirTerminalBoxTypeSpecification();
}
