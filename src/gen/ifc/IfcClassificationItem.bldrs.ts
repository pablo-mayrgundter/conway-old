
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcClassificationNotationFacet from "./IfcClassificationNotationFacet.bldrs"
import IfcClassification from "./IfcClassification.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcClassificationItemRelationship from "./IfcClassificationItemRelationship.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassificationitem.htm
 */
export default  class IfcClassificationItem extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcClassificationItemSpecification = IfcClassificationItemSpecification.instance;

private Notation_? : IfcClassificationNotationFacet
    private ItemOf_? : IfcClassification
    private Title_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcClassificationItemSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcClassificationItem';

    public readonly required: ReadonlyArray< string > = [ 'IfcClassificationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Notation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcClassificationNotationFacet',
			optional: false
		}, 
		{
			name: 'ItemOf',
			isCollection: false,
			rank: 0,
			baseType: 'IfcClassification',
			optional: true
		}, 
		{
			name: 'Title',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcClassificationItemSpecification = new IfcClassificationItemSpecification();
}
