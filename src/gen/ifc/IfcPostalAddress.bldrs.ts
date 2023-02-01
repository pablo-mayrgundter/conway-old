
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpostaladdress.htm
 */
export default  class IfcPostalAddress extends IfcAddress 
{    
    public readonly specification: IfcPostalAddressSpecification = IfcPostalAddressSpecification.instance;

private InternalLocation_? : IfcLabel
    private AddressLines_? : Array<IfcLabel>
    private PostalBox_? : IfcLabel
    private Town_? : IfcLabel
    private Region_? : IfcLabel
    private PostalCode_? : IfcLabel
    private Country_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPostalAddressSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPostalAddress';

    public readonly required: ReadonlyArray< string > = [ 'IfcPostalAddress', 'IfcAddress' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'InternalLocation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'AddressLines',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLabel>',
			optional: true
		}, 
		{
			name: 'PostalBox',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'Town',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'Region',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'PostalCode',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'Country',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPostalAddressSpecification = new IfcPostalAddressSpecification();
}
