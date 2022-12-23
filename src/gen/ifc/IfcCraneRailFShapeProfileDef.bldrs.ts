
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccranerailfshapeprofiledef.htm
 */
export default class IfcCraneRailFShapeProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCraneRailFShapeProfileDef';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCraneRailFShapeProfileDefSpecification = IfcCraneRailFShapeProfileDefSpecification.instance;

    constructor( public readonly OverallHeight : IfcPositiveLengthMeasure , public readonly HeadWidth : IfcPositiveLengthMeasure , public readonly Radius : IfcPositiveLengthMeasure  | undefined, public readonly HeadDepth2 : IfcPositiveLengthMeasure , public readonly HeadDepth3 : IfcPositiveLengthMeasure , public readonly WebThickness : IfcPositiveLengthMeasure , public readonly BaseDepth1 : IfcPositiveLengthMeasure , public readonly BaseDepth2 : IfcPositiveLengthMeasure , public readonly CentreOfGravityInY : IfcPositiveLengthMeasure  | undefined ) {}
}

export class IfcCraneRailFShapeProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCraneRailFShapeProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
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

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCraneRailFShapeProfileDefSpecification = new IfcCraneRailFShapeProfileDefSpecification();
}
