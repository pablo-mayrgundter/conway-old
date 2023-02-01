
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDocumentReference from "./IfcDocumentReference.bldrs"
import IfcDocumentInformation from "./IfcDocumentInformation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesdocument.htm
 */
export default  class IfcRelAssociatesDocument extends IfcRelAssociates 
{    
    public readonly specification: IfcRelAssociatesDocumentSpecification = IfcRelAssociatesDocumentSpecification.instance;

private RelatingDocument_? : IfcDocumentReference|IfcDocumentInformation

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelAssociatesDocumentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesDocument';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssociatesDocument', 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingDocument',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDocumentReference|IfcDocumentInformation',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssociatesDocumentSpecification = new IfcRelAssociatesDocumentSpecification();
}
