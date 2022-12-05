
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPreDefinedCurveFont from "./IfcPreDefinedCurveFont.bldrs"
import IfcCurveStyleFont from "./IfcCurveStyleFont.bldrs"
import IfcCurveStyleFontAndScaling from "./IfcCurveStyleFontAndScaling.bldrs"
import IfcRatioMeasure from "./IfcRatioMeasure.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcDescriptiveMeasure from "./IfcDescriptiveMeasure.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcColourSpecification from "./IfcColourSpecification.bldrs"
import IfcPreDefinedColour from "./IfcPreDefinedColour.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestyle.htm
 */
export default class IfcCurveStyle implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCurveStyle';

    public readonly __version__: number = 0;

    constructor( public readonly CurveFont : IfcPreDefinedCurveFont|IfcCurveStyleFont|IfcCurveStyleFontAndScaling  | undefined, public readonly CurveWidth : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure  | undefined, public readonly CurveColour : IfcColourSpecification|IfcPreDefinedColour  | undefined ) {}
}

export class IfcCurveStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCurveStyle';

    public readonly required: string[] = [ 'IfcPresentationStyle' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'CurveFont',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPreDefinedCurveFont|IfcCurveStyleFont|IfcCurveStyleFontAndScaling'
		}, 
		{
			name: 'CurveWidth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure'
		}, 
		{
			name: 'CurveColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourSpecification|IfcPreDefinedColour'
		}
    ];
}
