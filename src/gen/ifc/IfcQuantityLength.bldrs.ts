
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantitylength.htm
 */
export default class IfcQuantityLength implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcQuantityLength';

    public readonly __version__: number = 0;

    constructor( public readonly LengthValue : IfcLengthMeasure  ) {}
}

export class IfcQuantityLengthSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcQuantityLength';

    public readonly required: string[] = [ 'IfcPhysicalSimpleQuantity', 'IfcPhysicalQuantity' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'LengthValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}
    ];
}
