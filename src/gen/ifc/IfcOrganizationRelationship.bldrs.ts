
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorganizationrelationship.htm
 */
export default  class IfcOrganizationRelationship extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcOrganizationRelationshipSpecification = IfcOrganizationRelationshipSpecification.instance;

private Name_? : IfcLabel
    private Description_? : IfcText
    private RelatingOrganization_? : IfcOrganization
    private RelatedOrganizations_? : Array<IfcOrganization>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcOrganizationRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOrganizationRelationship';

    public readonly required: ReadonlyArray< string > = [ 'IfcOrganizationRelationship' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
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
			name: 'RelatingOrganization',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization',
			optional: false
		}, 
		{
			name: 'RelatedOrganizations',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcOrganization>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcOrganizationRelationshipSpecification = new IfcOrganizationRelationshipSpecification();
}
