
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRepresentationContext from "./IfcRepresentationContext.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcRepresentationItem from "./IfcRepresentationItem.bldrs"
import IfcRepresentationMap from "./IfcRepresentationMap.bldrs"
import IfcPresentationLayerAssignment from "./IfcPresentationLayerAssignment.bldrs"
import IfcProductRepresentation from "./IfcProductRepresentation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentation.htm
 */
export default  class IfcRepresentation extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcRepresentationSpecification = IfcRepresentationSpecification.instance;

private ContextOfItems_? : IfcRepresentationContext
    private RepresentationIdentifier_? : IfcLabel
    private RepresentationType_? : IfcLabel
    private Items_? : Array<IfcRepresentationItem>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRepresentationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRepresentation';

    public readonly required: ReadonlyArray< string > = [ 'IfcRepresentation' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ContextOfItems',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRepresentationContext',
			optional: false
		}, 
		{
			name: 'RepresentationIdentifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'RepresentationType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'Items',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcRepresentationItem>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRepresentationSpecification = new IfcRepresentationSpecification();
}
