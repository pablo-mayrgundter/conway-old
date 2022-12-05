
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefineditem.htm
 */
export default class IfcPreDefinedItem implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPreDefinedItem';

    public readonly __version__: number = 0;

    constructor( public readonly Name : IfcLabel  ) {}
}

export class IfcPreDefinedItemSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPreDefinedItem';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
