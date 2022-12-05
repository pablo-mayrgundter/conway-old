
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcPhysicalComplexQuantity from "./IfcPhysicalComplexQuantity.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcphysicalquantity.htm
 */
export default class IfcPhysicalQuantity implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPhysicalQuantity';

    public readonly __version__: number = 0;

    constructor( public readonly Name : IfcLabel , public readonly Description : IfcText  | undefined ) {}
}

export class IfcPhysicalQuantitySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPhysicalQuantity';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}
    ];
}
