
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccranerailfshapeprofiledef.htm
 */
export default class IfcCraneRailFShapeProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCraneRailFShapeProfileDef';

    public readonly __version__: number = 0;

	OverallHeight : IfcPositiveLengthMeasure;
	HeadWidth : IfcPositiveLengthMeasure;
	Radius? : IfcPositiveLengthMeasure;
	HeadDepth2 : IfcPositiveLengthMeasure;
	HeadDepth3 : IfcPositiveLengthMeasure;
	WebThickness : IfcPositiveLengthMeasure;
	BaseDepth1 : IfcPositiveLengthMeasure;
	BaseDepth2 : IfcPositiveLengthMeasure;
	CentreOfGravityInY? : IfcPositiveLengthMeasure;

}

export class IfcCraneRailFShapeProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCraneRailFShapeProfileDef';

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
			name: 'HeadWidth',
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
			name: 'CentreOfGravityInY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}
