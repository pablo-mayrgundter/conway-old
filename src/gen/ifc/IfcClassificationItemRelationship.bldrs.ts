
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcClassificationItem} from "./IfcClassificationItem.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassificationitemrelationship.htm
 */
export default class IfcClassificationItemRelationship implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcClassificationItemRelationship';

    public readonly __version__: number = 0;

	RelatingItem : IfcClassificationItem;
	RelatedItems : Array<IfcClassificationItem>;

}

export class IfcClassificationItemRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcClassificationItemRelationship';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingItem',
			isCollection: false,
			rank: 0,
			baseType: 'IfcClassificationItem'
		}, 
		{
			name: 'RelatedItems',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcClassificationItem>'
		}
    ];
}
