
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRepresentationItem from "./IfcRepresentationItem.bldrs"
import IfcPresentationStyleAssignment from "./IfcPresentationStyleAssignment.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstyleditem.htm
 */
export default  class IfcStyledItem extends IfcRepresentationItem 
{    
    public readonly specification: IfcStyledItemSpecification = IfcStyledItemSpecification.instance;

private Item_? : IfcRepresentationItem
    private Styles_? : Array<IfcPresentationStyleAssignment>
    private Name_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStyledItemSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStyledItem';

    public readonly required: ReadonlyArray< string > = [ 'IfcStyledItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Item',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRepresentationItem',
			optional: true
		}, 
		{
			name: 'Styles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPresentationStyleAssignment>',
			optional: false
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStyledItemSpecification = new IfcStyledItemSpecification();
}
