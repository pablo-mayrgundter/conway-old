
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcPreDefinedCurveFont from "./IfcPreDefinedCurveFont.bldrs"
import IfcCurveStyleFont from "./IfcCurveStyleFont.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestylefontandscaling.htm
 */
export default class IfcCurveStyleFontAndScaling implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCurveStyleFontAndScaling';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCurveStyleFontAndScalingSpecification = IfcCurveStyleFontAndScalingSpecification.instance;

    constructor( public readonly Name : IfcLabel  | undefined, public readonly CurveFont : IfcPreDefinedCurveFont|IfcCurveStyleFont , public readonly CurveFontScaling : IfcPositiveRatioMeasure  ) {}
}

export class IfcCurveStyleFontAndScalingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCurveStyleFontAndScaling';

    public readonly required: ReadonlyArray< string > = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'CurveFont',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPreDefinedCurveFont|IfcCurveStyleFont'
		}, 
		{
			name: 'CurveFontScaling',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCurveStyleFontAndScalingSpecification = new IfcCurveStyleFontAndScalingSpecification();
}
