
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcProduct} from "./IfcProduct.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoproduct.htm
 */
export default class IfcRelAssignsToProduct implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssignsToProduct';

    public readonly __version__: number = 0;

	RelatingProduct : IfcProduct;

}

export class IfcRelAssignsToProductSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssignsToProduct';

    public readonly required: string[] = [ 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingProduct',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProduct'
		}
    ];
}
