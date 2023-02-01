
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDirection from "./IfcDirection.bldrs"
import IfcReal from "./IfcReal.bldrs"
import IfcPositivePlaneAngleMeasure from "./IfcPositivePlaneAngleMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcespot.htm
 */
export default  class IfcLightSourceSpot extends IfcLightSourcePositional 
{    
    public readonly specification: IfcLightSourceSpotSpecification = IfcLightSourceSpotSpecification.instance;

private Orientation_? : IfcDirection
    private ConcentrationExponent_? : IfcReal
    private SpreadAngle_? : IfcPositivePlaneAngleMeasure
    private BeamWidthAngle_? : IfcPositivePlaneAngleMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcLightSourceSpotSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLightSourceSpot';

    public readonly required: ReadonlyArray< string > = [ 'IfcLightSourceSpot', 'IfcLightSourcePositional', 'IfcLightSource', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Orientation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection',
			optional: false
		}, 
		{
			name: 'ConcentrationExponent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReal',
			optional: true
		}, 
		{
			name: 'SpreadAngle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositivePlaneAngleMeasure',
			optional: false
		}, 
		{
			name: 'BeamWidthAngle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositivePlaneAngleMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcLightSourceSpotSpecification = new IfcLightSourceSpotSpecification();
}
