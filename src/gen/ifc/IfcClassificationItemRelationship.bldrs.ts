
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcClassificationItem from "./IfcClassificationItem.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassificationitemrelationship.htm
 */
export default  class IfcClassificationItemRelationship extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcClassificationItemRelationshipSpecification = IfcClassificationItemRelationshipSpecification.instance;

private RelatingItem_? : IfcClassificationItem
    private RelatedItems_? : Array<IfcClassificationItem>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcClassificationItemRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcClassificationItemRelationship';

    public readonly required: ReadonlyArray< string > = [ 'IfcClassificationItemRelationship' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingItem',
			isCollection: false,
			rank: 0,
			baseType: 'IfcClassificationItem',
			optional: false
		}, 
		{
			name: 'RelatedItems',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcClassificationItem>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcClassificationItemRelationshipSpecification = new IfcClassificationItemRelationshipSpecification();
}
