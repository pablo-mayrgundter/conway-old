
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcPlaneAngleMeasure from "./IfcPlaneAngleMeasure.bldrs"
import IfcRatioMeasure from "./IfcRatioMeasure.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcDescriptiveMeasure from "./IfcDescriptiveMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstylewithboxcharacteristics.htm
 */
export default class IfcTextStyleWithBoxCharacteristics implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTextStyleWithBoxCharacteristics';

    public readonly __version__: number = 0;

    constructor( public readonly BoxHeight : IfcPositiveLengthMeasure  | undefined, public readonly BoxWidth : IfcPositiveLengthMeasure  | undefined, public readonly BoxSlantAngle : IfcPlaneAngleMeasure  | undefined, public readonly BoxRotateAngle : IfcPlaneAngleMeasure  | undefined, public readonly CharacterSpacing : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure  | undefined ) {}
}

export class IfcTextStyleWithBoxCharacteristicsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextStyleWithBoxCharacteristics';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'BoxHeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'BoxWidth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'BoxSlantAngle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure'
		}, 
		{
			name: 'BoxRotateAngle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure'
		}, 
		{
			name: 'CharacterSpacing',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure'
		}
    ];
}
