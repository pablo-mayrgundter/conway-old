
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTextFontName from "./IfcTextFontName.bldrs"
import IfcFontStyle from "./IfcFontStyle.bldrs"
import IfcFontVariant from "./IfcFontVariant.bldrs"
import IfcFontWeight from "./IfcFontWeight.bldrs"
import IfcRatioMeasure from "./IfcRatioMeasure.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcDescriptiveMeasure from "./IfcDescriptiveMeasure.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstylefontmodel.htm
 */
export default class IfcTextStyleFontModel implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTextStyleFontModel';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcTextStyleFontModelSpecification = IfcTextStyleFontModelSpecification.instance;

    constructor( public readonly FontFamily : Array<IfcTextFontName>  | undefined, public readonly FontStyle : IfcFontStyle  | undefined, public readonly FontVariant : IfcFontVariant  | undefined, public readonly FontWeight : IfcFontWeight  | undefined, public readonly FontSize : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure  ) {}
}

export class IfcTextStyleFontModelSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextStyleFontModel';

    public readonly required: ReadonlyArray< string > = [ 'IfcPreDefinedTextFont', 'IfcPreDefinedItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'FontFamily',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcTextFontName>'
		}, 
		{
			name: 'FontStyle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFontStyle'
		}, 
		{
			name: 'FontVariant',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFontVariant'
		}, 
		{
			name: 'FontWeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFontWeight'
		}, 
		{
			name: 'FontSize',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTextStyleFontModelSpecification = new IfcTextStyleFontModelSpecification();
}
