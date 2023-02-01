
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcPlaneAngleMeasure from "./IfcPlaneAngleMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctshapeprofiledef.htm
 */
export default  class IfcTShapeProfileDef extends IfcParameterizedProfileDef 
{    
    public readonly specification: IfcTShapeProfileDefSpecification = IfcTShapeProfileDefSpecification.instance;

private Depth_? : IfcPositiveLengthMeasure
    private FlangeWidth_? : IfcPositiveLengthMeasure
    private WebThickness_? : IfcPositiveLengthMeasure
    private FlangeThickness_? : IfcPositiveLengthMeasure
    private FilletRadius_? : IfcPositiveLengthMeasure
    private FlangeEdgeRadius_? : IfcPositiveLengthMeasure
    private WebEdgeRadius_? : IfcPositiveLengthMeasure
    private WebSlope_? : IfcPlaneAngleMeasure
    private FlangeSlope_? : IfcPlaneAngleMeasure
    private CentreOfGravityInY_? : IfcPositiveLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTShapeProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTShapeProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcTShapeProfileDef', 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Depth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'FlangeWidth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'WebThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'FlangeThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'FilletRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'FlangeEdgeRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'WebEdgeRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'WebSlope',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure',
			optional: true
		}, 
		{
			name: 'FlangeSlope',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure',
			optional: true
		}, 
		{
			name: 'CentreOfGravityInY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTShapeProfileDefSpecification = new IfcTShapeProfileDefSpecification();
}
