
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
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
export default  class IfcCurveStyle extends IfcPresentationStyle 
{    
    public readonly specification: IfcCurveStyleSpecification = IfcCurveStyleSpecification.instance;

private CurveFont_? : IfcPreDefinedCurveFont|IfcCurveStyleFont|IfcCurveStyleFontAndScaling
    private CurveWidth_? : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure
    private CurveColour_? : IfcColourSpecification|IfcPreDefinedColour

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCurveStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCurveStyle';

    public readonly required: ReadonlyArray< string > = [ 'IfcCurveStyle', 'IfcPresentationStyle' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'CurveFont',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPreDefinedCurveFont|IfcCurveStyleFont|IfcCurveStyleFontAndScaling',
			optional: true
		}, 
		{
			name: 'CurveWidth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'CurveColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourSpecification|IfcPreDefinedColour',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCurveStyleSpecification = new IfcCurveStyleSpecification();
}
