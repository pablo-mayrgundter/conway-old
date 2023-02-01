
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLibraryReference from "./IfcLibraryReference.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclibraryinformation.htm
 */
export default  class IfcLibraryInformation extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcLibraryInformationSpecification = IfcLibraryInformationSpecification.instance;

private Name_? : IfcLabel
    private Version_? : IfcLabel
    private Publisher_? : IfcOrganization
    private VersionDate_? : IfcCalendarDate
    private LibraryReference_? : Array<IfcLibraryReference>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcLibraryInformationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLibraryInformation';

    public readonly required: ReadonlyArray< string > = [ 'IfcLibraryInformation' ];

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
			name: 'Version',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'Publisher',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization',
			optional: true
		}, 
		{
			name: 'VersionDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate',
			optional: true
		}, 
		{
			name: 'LibraryReference',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLibraryReference>',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcLibraryInformationSpecification = new IfcLibraryInformationSpecification();
}
