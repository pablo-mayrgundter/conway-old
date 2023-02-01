
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctask.htm
 */
export default  class IfcTask extends IfcProcess 
{    
    public readonly specification: IfcTaskSpecification = IfcTaskSpecification.instance;

private TaskId_? : IfcIdentifier
    private Status_? : IfcLabel
    private WorkMethod_? : IfcLabel
    private IsMilestone_? : boolean
    private Priority_? : number

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTaskSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTask';

    public readonly required: ReadonlyArray< string > = [ 'IfcTask', 'IfcProcess', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TaskId',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: false
		}, 
		{
			name: 'Status',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'WorkMethod',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'IsMilestone',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}, 
		{
			name: 'Priority',
			isCollection: false,
			rank: 0,
			baseType: 'number',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTaskSpecification = new IfcTaskSpecification();
}
