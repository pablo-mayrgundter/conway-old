
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccranerailashapeprofiledef.htm
 */
export default class IfcCraneRailAShapeProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCraneRailAShapeProfileDef';

    public readonly __version__: number = 0;

    constructor( public readonly OverallHeight : IfcPositiveLengthMeasure , public readonly BaseWidth2 : IfcPositiveLengthMeasure , public readonly Radius : IfcPositiveLengthMeasure  | undefined, public readonly HeadWidth : IfcPositiveLengthMeasure , public readonly HeadDepth2 : IfcPositiveLengthMeasure , public readonly HeadDepth3 : IfcPositiveLengthMeasure , public readonly WebThickness : IfcPositiveLengthMeasure , public readonly BaseWidth4 : IfcPositiveLengthMeasure , public readonly BaseDepth1 : IfcPositiveLengthMeasure , public readonly BaseDepth2 : IfcPositiveLengthMeasure , public readonly BaseDepth3 : IfcPositiveLengthMeasure , public readonly CentreOfGravityInY : IfcPositiveLengthMeasure  | undefined ) {}
}

export class IfcCraneRailAShapeProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCraneRailAShapeProfileDef';

    public readonly required: string[] = [ 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'OverallHeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'BaseWidth2',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'Radius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'HeadWidth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'HeadDepth2',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'HeadDepth3',
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
			name: 'BaseWidth4',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'BaseDepth1',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'BaseDepth2',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'BaseDepth3',
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
