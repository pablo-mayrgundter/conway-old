
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPhysicalQuantity} from "./IfcPhysicalQuantity.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcphysicalcomplexquantity.htm
 */
export default class IfcPhysicalComplexQuantity implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPhysicalComplexQuantity';

    public readonly __version__: number = 0;

	HasQuantities : Array<IfcPhysicalQuantity>;
	Discrimination : IfcLabel;
	Quality? : IfcLabel;
	Usage? : IfcLabel;

}

export class IfcPhysicalComplexQuantitySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPhysicalComplexQuantity';

    public readonly required: string[] = [ 'IfcPhysicalQuantity' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'HasQuantities',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPhysicalQuantity>'
		}, 
		{
			name: 'Discrimination',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Quality',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Usage',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
