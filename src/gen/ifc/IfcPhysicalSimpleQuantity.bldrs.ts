
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcNamedUnit from "./IfcNamedUnit.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcphysicalsimplequantity.htm
 */
export default class IfcPhysicalSimpleQuantity implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcPhysicalSimpleQuantity';

    public readonly __version__: number = 0;

    constructor( public readonly Unit : IfcNamedUnit  | undefined ) {}
}

export class IfcPhysicalSimpleQuantitySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPhysicalSimpleQuantity';

    public readonly required: string[] = [ 'IfcPhysicalQuantity' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Unit',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNamedUnit'
		}
    ];
}
