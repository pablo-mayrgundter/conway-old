
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDoorStyleOperationEnum from "./IfcDoorStyleOperationEnum.bldrs"
import IfcDoorStyleConstructionEnum from "./IfcDoorStyleConstructionEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoorstyle.htm
 */
export default  class IfcDoorStyle extends IfcTypeProduct 
{    
    public readonly specification: IfcDoorStyleSpecification = IfcDoorStyleSpecification.instance;

private OperationType_? : IfcDoorStyleOperationEnum
    private ConstructionType_? : IfcDoorStyleConstructionEnum
    private ParameterTakesPrecedence_? : boolean
    private Sizeable_? : boolean

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDoorStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDoorStyle';

    public readonly required: ReadonlyArray< string > = [ 'IfcDoorStyle', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'OperationType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDoorStyleOperationEnum',
			optional: false
		}, 
		{
			name: 'ConstructionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDoorStyleConstructionEnum',
			optional: false
		}, 
		{
			name: 'ParameterTakesPrecedence',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}, 
		{
			name: 'Sizeable',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDoorStyleSpecification = new IfcDoorStyleSpecification();
}
