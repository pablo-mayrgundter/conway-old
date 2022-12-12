
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrationalbeziercurve.htm
 */
export default class IfcRationalBezierCurve implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRationalBezierCurve';

    public readonly __version__: number = 0;

    constructor( public readonly WeightsData : Array<number>  ) {}
}

export class IfcRationalBezierCurveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRationalBezierCurve';

    public readonly required: string[] = [ 'IfcBezierCurve', 'IfcBSplineCurve', 'IfcBoundedCurve', 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'WeightsData',
			isCollection: true,
			rank: 1,
			baseType: 'Array<number>'
		}
    ];
}