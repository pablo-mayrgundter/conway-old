
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPlaneAngleMeasure from "./IfcPlaneAngleMeasure.bldrs"
import IfcLuminousIntensityDistributionMeasure from "./IfcLuminousIntensityDistributionMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightdistributiondata.htm
 */
export default  class IfcLightDistributionData extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcLightDistributionDataSpecification = IfcLightDistributionDataSpecification.instance;

private MainPlaneAngle_? : IfcPlaneAngleMeasure
    private SecondaryPlaneAngle_? : Array<IfcPlaneAngleMeasure>
    private LuminousIntensity_? : Array<IfcLuminousIntensityDistributionMeasure>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcLightDistributionDataSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLightDistributionData';

    public readonly required: ReadonlyArray< string > = [ 'IfcLightDistributionData' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'MainPlaneAngle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure',
			optional: false
		}, 
		{
			name: 'SecondaryPlaneAngle',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPlaneAngleMeasure>',
			optional: false
		}, 
		{
			name: 'LuminousIntensity',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLuminousIntensityDistributionMeasure>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcLightDistributionDataSpecification = new IfcLightDistributionDataSpecification();
}
