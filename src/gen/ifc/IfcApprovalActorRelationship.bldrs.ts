
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcApproval from "./IfcApproval.bldrs"
import IfcActorRole from "./IfcActorRole.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcapprovalactorrelationship.htm
 */
export default  class IfcApprovalActorRelationship extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcApprovalActorRelationshipSpecification = IfcApprovalActorRelationshipSpecification.instance;

private Actor_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization
    private Approval_? : IfcApproval
    private Role_? : IfcActorRole

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcApprovalActorRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcApprovalActorRelationship';

    public readonly required: ReadonlyArray< string > = [ 'IfcApprovalActorRelationship' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Actor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization|IfcPerson|IfcPersonAndOrganization',
			optional: false
		}, 
		{
			name: 'Approval',
			isCollection: false,
			rank: 0,
			baseType: 'IfcApproval',
			optional: false
		}, 
		{
			name: 'Role',
			isCollection: false,
			rank: 0,
			baseType: 'IfcActorRole',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcApprovalActorRelationshipSpecification = new IfcApprovalActorRelationshipSpecification();
}
