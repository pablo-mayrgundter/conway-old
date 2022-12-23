
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestylefontpattern.htm
 */
export default class IfcCurveStyleFontPattern implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCurveStyleFontPattern';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCurveStyleFontPatternSpecification = IfcCurveStyleFontPatternSpecification.instance;

    constructor( public readonly VisibleSegmentLength : IfcLengthMeasure , public readonly InvisibleSegmentLength : IfcPositiveLengthMeasure  ) {}
}

export class IfcCurveStyleFontPatternSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCurveStyleFontPattern';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'VisibleSegmentLength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'InvisibleSegmentLength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCurveStyleFontPatternSpecification = new IfcCurveStyleFontPatternSpecification();
}
