
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccranerailashapeprofiledef.htm
 */
export default class IfcCraneRailAShapeProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCraneRailAShapeProfileDef';

    public readonly __version__: number = 0;

	OverallHeight : IfcPositiveLengthMeasure;
	BaseWidth2 : IfcPositiveLengthMeasure;
	Radius? : IfcPositiveLengthMeasure;
	HeadWidth : IfcPositiveLengthMeasure;
	HeadDepth2 : IfcPositiveLengthMeasure;
	HeadDepth3 : IfcPositiveLengthMeasure;
	WebThickness : IfcPositiveLengthMeasure;
	BaseWidth4 : IfcPositiveLengthMeasure;
	BaseDepth1 : IfcPositiveLengthMeasure;
	BaseDepth2 : IfcPositiveLengthMeasure;
	BaseDepth3 : IfcPositiveLengthMeasure;
	CentreOfGravityInY? : IfcPositiveLengthMeasure;

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
