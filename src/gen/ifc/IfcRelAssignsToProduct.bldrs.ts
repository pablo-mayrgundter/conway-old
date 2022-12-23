
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProduct from "./IfcProduct.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoproduct.htm
 */
export default class IfcRelAssignsToProduct implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssignsToProduct';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcRelAssignsToProductSpecification = IfcRelAssignsToProductSpecification.instance;

    constructor( public readonly RelatingProduct : IfcProduct  ) {}
}

export class IfcRelAssignsToProductSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssignsToProduct';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingProduct',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProduct'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssignsToProductSpecification = new IfcRelAssignsToProductSpecification();
}
