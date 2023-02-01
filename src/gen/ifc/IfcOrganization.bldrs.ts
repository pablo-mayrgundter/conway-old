
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcActorRole from "./IfcActorRole.bldrs"
import IfcAddress from "./IfcAddress.bldrs"
import IfcOrganizationRelationship from "./IfcOrganizationRelationship.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorganization.htm
 */
export default  class IfcOrganization extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcOrganizationSpecification = IfcOrganizationSpecification.instance;

private Id_? : IfcIdentifier
    private Name_? : IfcLabel
    private Description_? : IfcText
    private Roles_? : Array<IfcActorRole>
    private Addresses_? : Array<IfcAddress>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcOrganizationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOrganization';

    public readonly required: ReadonlyArray< string > = [ 'IfcOrganization' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Id',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: true
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}, 
		{
			name: 'Roles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcActorRole>',
			optional: true
		}, 
		{
			name: 'Addresses',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcAddress>',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcOrganizationSpecification = new IfcOrganizationSpecification();
}
