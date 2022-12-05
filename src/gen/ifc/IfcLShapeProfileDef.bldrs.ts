
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcPlaneAngleMeasure from "./IfcPlaneAngleMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclshapeprofiledef.htm
 */
export default class IfcLShapeProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcLShapeProfileDef';

    public readonly __version__: number = 0;

    constructor( public readonly Depth : IfcPositiveLengthMeasure , public readonly Width : IfcPositiveLengthMeasure  | undefined, public readonly Thickness : IfcPositiveLengthMeasure , public readonly FilletRadius : IfcPositiveLengthMeasure  | undefined, public readonly EdgeRadius : IfcPositiveLengthMeasure  | undefined, public readonly LegSlope : IfcPlaneAngleMeasure  | undefined, public readonly CentreOfGravityInX : IfcPositiveLengthMeasure  | undefined, public readonly CentreOfGravityInY : IfcPositiveLengthMeasure  | undefined ) {}
}

export class IfcLShapeProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLShapeProfileDef';

    public readonly required: string[] = [ 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Depth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'Width',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'Thickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'FilletRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'EdgeRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'LegSlope',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure'
		}, 
		{
			name: 'CentreOfGravityInX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'CentreOfGravityInY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}
