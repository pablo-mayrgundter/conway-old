
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcActorRole from "./IfcActorRole.bldrs"
import IfcAddress from "./IfcAddress.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcperson.htm
 */
export default  class IfcPerson extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcPersonSpecification = IfcPersonSpecification.instance;

private Id_? : IfcIdentifier
    private FamilyName_? : IfcLabel
    private GivenName_? : IfcLabel
    private MiddleNames_? : Array<IfcLabel>
    private PrefixTitles_? : Array<IfcLabel>
    private SuffixTitles_? : Array<IfcLabel>
    private Roles_? : Array<IfcActorRole>
    private Addresses_? : Array<IfcAddress>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPersonSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPerson';

    public readonly required: ReadonlyArray< string > = [ 'IfcPerson' ];

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
			name: 'FamilyName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'GivenName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'MiddleNames',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLabel>',
			optional: true
		}, 
		{
			name: 'PrefixTitles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLabel>',
			optional: true
		}, 
		{
			name: 'SuffixTitles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLabel>',
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

    public static readonly instance: IfcPersonSpecification = new IfcPersonSpecification();
}
