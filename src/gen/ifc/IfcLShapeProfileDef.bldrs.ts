
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcPlaneAngleMeasure from "./IfcPlaneAngleMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclshapeprofiledef.htm
 */
export default  class IfcLShapeProfileDef extends IfcParameterizedProfileDef 
{    
    public readonly specification: IfcLShapeProfileDefSpecification = IfcLShapeProfileDefSpecification.instance;

private Depth_? : IfcPositiveLengthMeasure
    private Width_? : IfcPositiveLengthMeasure
    private Thickness_? : IfcPositiveLengthMeasure
    private FilletRadius_? : IfcPositiveLengthMeasure
    private EdgeRadius_? : IfcPositiveLengthMeasure
    private LegSlope_? : IfcPlaneAngleMeasure
    private CentreOfGravityInX_? : IfcPositiveLengthMeasure
    private CentreOfGravityInY_? : IfcPositiveLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcLShapeProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLShapeProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcLShapeProfileDef', 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

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
			name: 'Width',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'Thickness',
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
			name: 'EdgeRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'LegSlope',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure',
			optional: true
		}, 
		{
			name: 'CentreOfGravityInX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
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

    public static readonly instance: IfcLShapeProfileDefSpecification = new IfcLShapeProfileDefSpecification();
}
