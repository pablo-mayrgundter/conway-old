
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccartesianpoint.htm
 */
export default class IfcCartesianPoint implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCartesianPoint';

    public readonly __version__: number = 0;

    constructor( public readonly Coordinates : Array<IfcLengthMeasure>  ) {}
}

export class IfcCartesianPointSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCartesianPoint';

    public readonly required: string[] = [ 'IfcPoint', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Coordinates',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLengthMeasure>'
		}
    ];
}
