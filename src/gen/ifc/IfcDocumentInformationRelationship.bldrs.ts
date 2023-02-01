
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDocumentInformation from "./IfcDocumentInformation.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdocumentinformationrelationship.htm
 */
export default  class IfcDocumentInformationRelationship extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcDocumentInformationRelationshipSpecification = IfcDocumentInformationRelationshipSpecification.instance;

private RelatingDocument_? : IfcDocumentInformation
    private RelatedDocuments_? : Array<IfcDocumentInformation>
    private RelationshipType_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDocumentInformationRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDocumentInformationRelationship';

    public readonly required: ReadonlyArray< string > = [ 'IfcDocumentInformationRelationship' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingDocument',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDocumentInformation',
			optional: false
		}, 
		{
			name: 'RelatedDocuments',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcDocumentInformation>',
			optional: false
		}, 
		{
			name: 'RelationshipType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDocumentInformationRelationshipSpecification = new IfcDocumentInformationRelationshipSpecification();
}
