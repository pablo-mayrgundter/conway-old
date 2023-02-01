
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionpointeccentricity.htm
 */
export default  class IfcConnectionPointEccentricity extends IfcConnectionPointGeometry 
{    
    public readonly specification: IfcConnectionPointEccentricitySpecification = IfcConnectionPointEccentricitySpecification.instance;

private EccentricityInX_? : IfcLengthMeasure
    private EccentricityInY_? : IfcLengthMeasure
    private EccentricityInZ_? : IfcLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcConnectionPointEccentricitySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConnectionPointEccentricity';

    public readonly required: ReadonlyArray< string > = [ 'IfcConnectionPointEccentricity', 'IfcConnectionPointGeometry', 'IfcConnectionGeometry' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'EccentricityInX',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}, 
		{
			name: 'EccentricityInY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}, 
		{
			name: 'EccentricityInZ',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConnectionPointEccentricitySpecification = new IfcConnectionPointEccentricitySpecification();
}
