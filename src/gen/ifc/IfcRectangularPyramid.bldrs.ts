
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectangularpyramid.htm
 */
export default class IfcRectangularPyramid implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRectangularPyramid';

    public readonly __version__: number = 0;

    constructor( public readonly XLength : IfcPositiveLengthMeasure , public readonly YLength : IfcPositiveLengthMeasure , public readonly Height : IfcPositiveLengthMeasure  ) {}
}

export class IfcRectangularPyramidSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRectangularPyramid';

    public readonly required: string[] = [ 'IfcCsgPrimitive3D', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'XLength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'YLength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'Height',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}