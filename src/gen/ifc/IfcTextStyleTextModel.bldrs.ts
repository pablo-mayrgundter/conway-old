
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
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
export default  class IfcTextStyleTextModel extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcTextStyleTextModelSpecification = IfcTextStyleTextModelSpecification.instance;

private TextIndent_? : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure
    private TextAlign_? : IfcTextAlignment
    private TextDecoration_? : IfcTextDecoration
    private LetterSpacing_? : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure
    private WordSpacing_? : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure
    private TextTransform_? : IfcTextTransformation
    private LineHeight_? : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTextStyleTextModelSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextStyleTextModel';

    public readonly required: ReadonlyArray< string > = [ 'IfcTextStyleTextModel' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TextIndent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'TextAlign',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTextAlignment',
			optional: true
		}, 
		{
			name: 'TextDecoration',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTextDecoration',
			optional: true
		}, 
		{
			name: 'LetterSpacing',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'WordSpacing',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'TextTransform',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTextTransformation',
			optional: true
		}, 
		{
			name: 'LineHeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTextStyleTextModelSpecification = new IfcTextStyleTextModelSpecification();
}
