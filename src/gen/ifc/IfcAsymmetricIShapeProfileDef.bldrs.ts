
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcasymmetricishapeprofiledef.htm
 */
export default class IfcAsymmetricIShapeProfileDef implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcAsymmetricIShapeProfileDef';

    public readonly __version__: number = 0;

    constructor( public readonly TopFlangeWidth : IfcPositiveLengthMeasure , public readonly TopFlangeThickness : IfcPositiveLengthMeasure  | undefined, public readonly TopFlangeFilletRadius : IfcPositiveLengthMeasure  | undefined, public readonly CentreOfGravityInY : IfcPositiveLengthMeasure  | undefined ) {}
}

export class IfcAsymmetricIShapeProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAsymmetricIShapeProfileDef';

    public readonly required: string[] = [ 'IfcIShapeProfileDef', 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'TopFlangeWidth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'TopFlangeThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'TopFlangeFilletRadius',
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
