
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcActor from "./IfcActor.bldrs"
import IfcActorRole from "./IfcActorRole.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoactor.htm
 */
export default  class IfcRelAssignsToActor extends IfcRelAssigns 
{    
    public readonly specification: IfcRelAssignsToActorSpecification = IfcRelAssignsToActorSpecification.instance;

private RelatingActor_? : IfcActor
    private ActingRole_? : IfcActorRole

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelAssignsToActorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssignsToActor';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssignsToActor', 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingActor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcActor',
			optional: false
		}, 
		{
			name: 'ActingRole',
			isCollection: false,
			rank: 0,
			baseType: 'IfcActorRole',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssignsToActorSpecification = new IfcRelAssignsToActorSpecification();
}
