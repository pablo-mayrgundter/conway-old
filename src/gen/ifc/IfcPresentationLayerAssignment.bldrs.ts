
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcRepresentationItem from "./IfcRepresentationItem.bldrs"
import IfcRepresentation from "./IfcRepresentation.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationlayerassignment.htm
 */
export default  class IfcPresentationLayerAssignment extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcPresentationLayerAssignmentSpecification = IfcPresentationLayerAssignmentSpecification.instance;

private Name_? : IfcLabel
    private Description_? : IfcText
    private AssignedItems_? : Array<IfcRepresentationItem|IfcRepresentation>
    private Identifier_? : IfcIdentifier

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPresentationLayerAssignmentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPresentationLayerAssignment';

    public readonly required: ReadonlyArray< string > = [ 'IfcPresentationLayerAssignment' ];

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
			name: 'AssignedItems',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcRepresentationItem|IfcRepresentation>',
			optional: false
		}, 
		{
			name: 'Identifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPresentationLayerAssignmentSpecification = new IfcPresentationLayerAssignmentSpecification();
}
