
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcRatioMeasure from "./IfcRatioMeasure.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcDescriptiveMeasure from "./IfcDescriptiveMeasure.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcTextAlignment from "./IfcTextAlignment.bldrs"
import IfcTextDecoration from "./IfcTextDecoration.bldrs"
import IfcTextTransformation from "./IfcTextTransformation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstyletextmodel.htm
 */
export default class IfcTextStyleTextModel implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTextStyleTextModel';

    public readonly __version__: number = 0;

    constructor( public readonly TextIndent : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure  | undefined, public readonly TextAlign : IfcTextAlignment  | undefined, public readonly TextDecoration : IfcTextDecoration  | undefined, public readonly LetterSpacing : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure  | undefined, public readonly WordSpacing : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure  | undefined, public readonly TextTransform : IfcTextTransformation  | undefined, public readonly LineHeight : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure  | undefined ) {}
}

export class IfcTextStyleTextModelSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextStyleTextModel';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'TextIndent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure'
		}, 
		{
			name: 'TextAlign',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTextAlignment'
		}, 
		{
			name: 'TextDecoration',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTextDecoration'
		}, 
		{
			name: 'LetterSpacing',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure'
		}, 
		{
			name: 'WordSpacing',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure'
		}, 
		{
			name: 'TextTransform',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTextTransformation'
		}, 
		{
			name: 'LineHeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure'
		}
    ];
}
