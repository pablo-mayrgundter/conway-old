
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcRepresentationItem from "./IfcRepresentationItem.bldrs"
import IfcPresentationStyleAssignment from "./IfcPresentationStyleAssignment.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstyleditem.htm
 */
export default class IfcStyledItem implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcStyledItem';

    public readonly __version__: number = 0;

    constructor( public readonly Item : IfcRepresentationItem  | undefined, public readonly Styles : Array<IfcPresentationStyleAssignment> , public readonly Name : IfcLabel  | undefined ) {}
}

export class IfcStyledItemSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStyledItem';

    public readonly required: string[] = [ 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Item',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRepresentationItem'
		}, 
		{
			name: 'Styles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPresentationStyleAssignment>'
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}