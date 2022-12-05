
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcPhysicalQuantity from "./IfcPhysicalQuantity.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementquantity.htm
 */
export default class IfcElementQuantity implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcElementQuantity';

    public readonly __version__: number = 0;

    constructor( public readonly MethodOfMeasurement : IfcLabel  | undefined, public readonly Quantities : Array<IfcPhysicalQuantity>  ) {}
}

export class IfcElementQuantitySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElementQuantity';

    public readonly required: string[] = [ 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'MethodOfMeasurement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Quantities',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPhysicalQuantity>'
		}
    ];
}
