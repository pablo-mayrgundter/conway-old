
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcActorRole from "./IfcActorRole.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpersonandorganization.htm
 */
export default  class IfcPersonAndOrganization extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcPersonAndOrganizationSpecification = IfcPersonAndOrganizationSpecification.instance;

private ThePerson_? : IfcPerson
    private TheOrganization_? : IfcOrganization
    private Roles_? : Array<IfcActorRole>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPersonAndOrganizationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPersonAndOrganization';

    public readonly required: ReadonlyArray< string > = [ 'IfcPersonAndOrganization' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ThePerson',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPerson',
			optional: false
		}, 
		{
			name: 'TheOrganization',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization',
			optional: false
		}, 
		{
			name: 'Roles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcActorRole>',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPersonAndOrganizationSpecification = new IfcPersonAndOrganizationSpecification();
}
