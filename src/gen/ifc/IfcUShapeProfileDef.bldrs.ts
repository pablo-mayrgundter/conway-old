
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcPlaneAngleMeasure from "./IfcPlaneAngleMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcushapeprofiledef.htm
 */
export default class IfcUShapeProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcUShapeProfileDef';

    public readonly __version__: number = 0;

    constructor( public readonly Depth : IfcPositiveLengthMeasure , public readonly FlangeWidth : IfcPositiveLengthMeasure , public readonly WebThickness : IfcPositiveLengthMeasure , public readonly FlangeThickness : IfcPositiveLengthMeasure , public readonly FilletRadius : IfcPositiveLengthMeasure  | undefined, public readonly EdgeRadius : IfcPositiveLengthMeasure  | undefined, public readonly FlangeSlope : IfcPlaneAngleMeasure  | undefined, public readonly CentreOfGravityInX : IfcPositiveLengthMeasure  | undefined ) {}
}

export class IfcUShapeProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcUShapeProfileDef';

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
			name: 'FlangeWidth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'WebThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'FlangeThickness',
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
			name: 'FlangeSlope',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure'
		}, 
		{
			name: 'CentreOfGravityInX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}
