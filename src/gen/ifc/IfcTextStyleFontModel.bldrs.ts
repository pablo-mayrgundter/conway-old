
import Component from "../../core/component"
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
export default  class IfcTextStyleFontModel extends IfcPreDefinedTextFont 
{    
    public readonly specification: IfcTextStyleFontModelSpecification = IfcTextStyleFontModelSpecification.instance;

private FontFamily_? : Array<IfcTextFontName>
    private FontStyle_? : IfcFontStyle
    private FontVariant_? : IfcFontVariant
    private FontWeight_? : IfcFontWeight
    private FontSize_? : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTextStyleFontModelSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextStyleFontModel';

    public readonly required: ReadonlyArray< string > = [ 'IfcTextStyleFontModel', 'IfcPreDefinedTextFont', 'IfcPreDefinedItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'FontFamily',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcTextFontName>',
			optional: true
		}, 
		{
			name: 'FontStyle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFontStyle',
			optional: true
		}, 
		{
			name: 'FontVariant',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFontVariant',
			optional: true
		}, 
		{
			name: 'FontWeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFontWeight',
			optional: true
		}, 
		{
			name: 'FontSize',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTextStyleFontModelSpecification = new IfcTextStyleFontModelSpecification();
}
