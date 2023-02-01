
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcWindowStyleConstructionEnum from "./IfcWindowStyleConstructionEnum.bldrs"
import IfcWindowStyleOperationEnum from "./IfcWindowStyleOperationEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwindowstyle.htm
 */
export default  class IfcWindowStyle extends IfcTypeProduct 
{    
    public readonly specification: IfcWindowStyleSpecification = IfcWindowStyleSpecification.instance;

private ConstructionType_? : IfcWindowStyleConstructionEnum
    private OperationType_? : IfcWindowStyleOperationEnum
    private ParameterTakesPrecedence_? : boolean
    private Sizeable_? : boolean

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcWindowStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcWindowStyle';

    public readonly required: ReadonlyArray< string > = [ 'IfcWindowStyle', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ConstructionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcWindowStyleConstructionEnum',
			optional: false
		}, 
		{
			name: 'OperationType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcWindowStyleOperationEnum',
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

    public static readonly instance: IfcWindowStyleSpecification = new IfcWindowStyleSpecification();
}
