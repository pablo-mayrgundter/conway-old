
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdocumentelectronicformat.htm
 */
export default  class IfcDocumentElectronicFormat extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcDocumentElectronicFormatSpecification = IfcDocumentElectronicFormatSpecification.instance;

private FileExtension_? : IfcLabel
    private MimeContentType_? : IfcLabel
    private MimeSubtype_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDocumentElectronicFormatSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDocumentElectronicFormat';

    public readonly required: ReadonlyArray< string > = [ 'IfcDocumentElectronicFormat' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'FileExtension',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'MimeContentType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'MimeSubtype',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDocumentElectronicFormatSpecification = new IfcDocumentElectronicFormatSpecification();
}
