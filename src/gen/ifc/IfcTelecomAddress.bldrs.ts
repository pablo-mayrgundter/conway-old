
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctelecomaddress.htm
 */
export default  class IfcTelecomAddress extends IfcAddress 
{    
    public readonly specification: IfcTelecomAddressSpecification = IfcTelecomAddressSpecification.instance;

private TelephoneNumbers_? : Array<IfcLabel>
    private FacsimileNumbers_? : Array<IfcLabel>
    private PagerNumber_? : IfcLabel
    private ElectronicMailAddresses_? : Array<IfcLabel>
    private WWWHomePageURL_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTelecomAddressSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTelecomAddress';

    public readonly required: ReadonlyArray< string > = [ 'IfcTelecomAddress', 'IfcAddress' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TelephoneNumbers',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLabel>',
			optional: true
		}, 
		{
			name: 'FacsimileNumbers',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLabel>',
			optional: true
		}, 
		{
			name: 'PagerNumber',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'ElectronicMailAddresses',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLabel>',
			optional: true
		}, 
		{
			name: 'WWWHomePageURL',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTelecomAddressSpecification = new IfcTelecomAddressSpecification();
}
