
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDocumentReference from "./IfcDocumentReference.bldrs"
import IfcDocumentInformation from "./IfcDocumentInformation.bldrs"
import IfcAppliedValue from "./IfcAppliedValue.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreferencesvaluedocument.htm
 */
export default  class IfcReferencesValueDocument extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcReferencesValueDocumentSpecification = IfcReferencesValueDocumentSpecification.instance;

private ReferencedDocument_? : IfcDocumentReference|IfcDocumentInformation
    private ReferencingValues_? : Array<IfcAppliedValue>
    private Name_? : IfcLabel
    private Description_? : IfcText

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcReferencesValueDocumentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcReferencesValueDocument';

    public readonly required: ReadonlyArray< string > = [ 'IfcReferencesValueDocument' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ReferencedDocument',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDocumentReference|IfcDocumentInformation',
			optional: false
		}, 
		{
			name: 'ReferencingValues',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcAppliedValue>',
			optional: false
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcReferencesValueDocumentSpecification = new IfcReferencesValueDocumentSpecification();
}
