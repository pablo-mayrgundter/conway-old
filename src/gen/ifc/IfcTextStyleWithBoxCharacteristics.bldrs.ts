
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
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
export default  class IfcTextStyleWithBoxCharacteristics extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcTextStyleWithBoxCharacteristicsSpecification = IfcTextStyleWithBoxCharacteristicsSpecification.instance;

private BoxHeight_? : IfcPositiveLengthMeasure
    private BoxWidth_? : IfcPositiveLengthMeasure
    private BoxSlantAngle_? : IfcPlaneAngleMeasure
    private BoxRotateAngle_? : IfcPlaneAngleMeasure
    private CharacterSpacing_? : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTextStyleWithBoxCharacteristicsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextStyleWithBoxCharacteristics';

    public readonly required: ReadonlyArray< string > = [ 'IfcTextStyleWithBoxCharacteristics' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'BoxHeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'BoxWidth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'BoxSlantAngle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure',
			optional: true
		}, 
		{
			name: 'BoxRotateAngle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure',
			optional: true
		}, 
		{
			name: 'CharacterSpacing',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTextStyleWithBoxCharacteristicsSpecification = new IfcTextStyleWithBoxCharacteristicsSpecification();
}
