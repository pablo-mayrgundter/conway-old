
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcReal from "./IfcReal.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcepositional.htm
 */
export default  class IfcLightSourcePositional extends IfcLightSource 
{    
    public readonly specification: IfcLightSourcePositionalSpecification = IfcLightSourcePositionalSpecification.instance;

private Position_? : IfcCartesianPoint
    private Radius_? : IfcPositiveLengthMeasure
    private ConstantAttenuation_? : IfcReal
    private DistanceAttenuation_? : IfcReal
    private QuadricAttenuation_? : IfcReal

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcLightSourcePositionalSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLightSourcePositional';

    public readonly required: ReadonlyArray< string > = [ 'IfcLightSourcePositional', 'IfcLightSource', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Position',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianPoint',
			optional: false
		}, 
		{
			name: 'Radius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'ConstantAttenuation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReal',
			optional: false
		}, 
		{
			name: 'DistanceAttenuation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReal',
			optional: false
		}, 
		{
			name: 'QuadricAttenuation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReal',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcLightSourcePositionalSpecification = new IfcLightSourcePositionalSpecification();
}
