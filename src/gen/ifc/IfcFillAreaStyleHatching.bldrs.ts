
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcCurveStyle from "./IfcCurveStyle.bldrs"
import IfcOneDirectionRepeatFactor from "./IfcOneDirectionRepeatFactor.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcPlaneAngleMeasure from "./IfcPlaneAngleMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastylehatching.htm
 */
export default class IfcFillAreaStyleHatching implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFillAreaStyleHatching';

    public readonly __version__: number = 0;

    constructor( public readonly HatchLineAppearance : IfcCurveStyle , public readonly StartOfNextHatchLine : IfcOneDirectionRepeatFactor|IfcPositiveLengthMeasure , public readonly PointOfReferenceHatchLine : IfcCartesianPoint  | undefined, public readonly PatternStart : IfcCartesianPoint  | undefined, public readonly HatchLineAngle : IfcPlaneAngleMeasure  ) {}
}

export class IfcFillAreaStyleHatchingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFillAreaStyleHatching';

    public readonly required: string[] = [ 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'HatchLineAppearance',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurveStyle'
		}, 
		{
			name: 'StartOfNextHatchLine',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOneDirectionRepeatFactor|IfcPositiveLengthMeasure'
		}, 
		{
			name: 'PointOfReferenceHatchLine',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianPoint'
		}, 
		{
			name: 'PatternStart',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianPoint'
		}, 
		{
			name: 'HatchLineAngle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure'
		}
    ];
}
