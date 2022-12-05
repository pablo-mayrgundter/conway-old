
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdirection.htm
 */
export default class IfcDirection implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDirection';

    public readonly __version__: number = 0;

    constructor( public readonly DirectionRatios : Array<number>  ) {}
}

export class IfcDirectionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDirection';

    public readonly required: string[] = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'DirectionRatios',
			isCollection: true,
			rank: 1,
			baseType: 'Array<number>'
		}
    ];
}
