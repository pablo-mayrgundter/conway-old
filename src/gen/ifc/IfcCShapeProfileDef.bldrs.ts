
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccshapeprofiledef.htm
 */
export default class IfcCShapeProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCShapeProfileDef';

    public readonly __version__: number = 0;

    constructor( public readonly Depth : IfcPositiveLengthMeasure , public readonly Width : IfcPositiveLengthMeasure , public readonly WallThickness : IfcPositiveLengthMeasure , public readonly Girth : IfcPositiveLengthMeasure , public readonly InternalFilletRadius : IfcPositiveLengthMeasure  | undefined, public readonly CentreOfGravityInX : IfcPositiveLengthMeasure  | undefined ) {}
}

export class IfcCShapeProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCShapeProfileDef';

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
			name: 'WallThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'Girth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'InternalFilletRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'CentreOfGravityInX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}
