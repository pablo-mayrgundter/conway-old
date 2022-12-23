
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcBSplineCurveForm from "./IfcBSplineCurveForm.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbsplinecurve.htm
 */
export default class IfcBSplineCurve implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcBSplineCurve';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcBSplineCurveSpecification = IfcBSplineCurveSpecification.instance;

    constructor( public readonly Degree : number , public readonly ControlPointsList : Array<IfcCartesianPoint> , public readonly CurveForm : IfcBSplineCurveForm , public readonly ClosedCurve : boolean , public readonly SelfIntersect : boolean  ) {}
}

export class IfcBSplineCurveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBSplineCurve';

    public readonly required: ReadonlyArray< string > = [ 'IfcBoundedCurve', 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Degree',
			isCollection: false,
			rank: 0,
			baseType: 'number'
		}, 
		{
			name: 'ControlPointsList',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCartesianPoint>'
		}, 
		{
			name: 'CurveForm',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBSplineCurveForm'
		}, 
		{
			name: 'ClosedCurve',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}, 
		{
			name: 'SelfIntersect',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBSplineCurveSpecification = new IfcBSplineCurveSpecification();
}
