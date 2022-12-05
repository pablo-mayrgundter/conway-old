
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPlane from "./IfcPlane.bldrs"
import IfcCurve from "./IfcCurve.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurveboundedplane.htm
 */
export default class IfcCurveBoundedPlane implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCurveBoundedPlane';

    public readonly __version__: number = 0;

    constructor( public readonly BasisSurface : IfcPlane , public readonly OuterBoundary : IfcCurve , public readonly InnerBoundaries : Array<IfcCurve>  ) {}
}

export class IfcCurveBoundedPlaneSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCurveBoundedPlane';

    public readonly required: string[] = [ 'IfcBoundedSurface', 'IfcSurface', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'BasisSurface',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlane'
		}, 
		{
			name: 'OuterBoundary',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve'
		}, 
		{
			name: 'InnerBoundaries',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCurve>'
		}
    ];
}
