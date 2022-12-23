
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDoorStyleOperationEnum from "./IfcDoorStyleOperationEnum.bldrs"
import IfcDoorStyleConstructionEnum from "./IfcDoorStyleConstructionEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoorstyle.htm
 */
export default class IfcDoorStyle implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDoorStyle';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcDoorStyleSpecification = IfcDoorStyleSpecification.instance;

    constructor( public readonly OperationType : IfcDoorStyleOperationEnum , public readonly ConstructionType : IfcDoorStyleConstructionEnum , public readonly ParameterTakesPrecedence : boolean , public readonly Sizeable : boolean  ) {}
}

export class IfcDoorStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDoorStyle';

    public readonly required: ReadonlyArray< string > = [ 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'OperationType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDoorStyleOperationEnum'
		}, 
		{
			name: 'ConstructionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDoorStyleConstructionEnum'
		}, 
		{
			name: 'ParameterTakesPrecedence',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}, 
		{
			name: 'Sizeable',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDoorStyleSpecification = new IfcDoorStyleSpecification();
}
