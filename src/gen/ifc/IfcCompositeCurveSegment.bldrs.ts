
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTransitionCode from "./IfcTransitionCode.bldrs"
import IfcCurve from "./IfcCurve.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"
import IfcCompositeCurve from "./IfcCompositeCurve.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositecurvesegment.htm
 */
export default class IfcCompositeCurveSegment implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCompositeCurveSegment';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCompositeCurveSegmentSpecification = IfcCompositeCurveSegmentSpecification.instance;

    constructor( public readonly Transition : IfcTransitionCode , public readonly SameSense : boolean , public readonly ParentCurve : IfcCurve  ) {}
}

export class IfcCompositeCurveSegmentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCompositeCurveSegment';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Transition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTransitionCode'
		}, 
		{
			name: 'SameSense',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}, 
		{
			name: 'ParentCurve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCompositeCurveSegmentSpecification = new IfcCompositeCurveSegmentSpecification();
}
