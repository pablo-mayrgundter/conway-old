
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcishapeprofiledef.htm
 */
export default class IfcIShapeProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcIShapeProfileDef';

    public readonly __version__: number = 0;

    constructor( public readonly OverallWidth : IfcPositiveLengthMeasure , public readonly OverallDepth : IfcPositiveLengthMeasure , public readonly WebThickness : IfcPositiveLengthMeasure , public readonly FlangeThickness : IfcPositiveLengthMeasure , public readonly FilletRadius : IfcPositiveLengthMeasure  | undefined ) {}
}

export class IfcIShapeProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcIShapeProfileDef';

    public readonly required: string[] = [ 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'OverallWidth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'OverallDepth',
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
		}
    ];
}
