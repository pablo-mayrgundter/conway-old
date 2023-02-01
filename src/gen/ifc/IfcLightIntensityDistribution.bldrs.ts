
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLightDistributionCurveEnum from "./IfcLightDistributionCurveEnum.bldrs"
import IfcLightDistributionData from "./IfcLightDistributionData.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightintensitydistribution.htm
 */
export default  class IfcLightIntensityDistribution extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcLightIntensityDistributionSpecification = IfcLightIntensityDistributionSpecification.instance;

private LightDistributionCurve_? : IfcLightDistributionCurveEnum
    private DistributionData_? : Array<IfcLightDistributionData>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcLightIntensityDistributionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLightIntensityDistribution';

    public readonly required: ReadonlyArray< string > = [ 'IfcLightIntensityDistribution' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'LightDistributionCurve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLightDistributionCurveEnum',
			optional: false
		}, 
		{
			name: 'DistributionData',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLightDistributionData>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcLightIntensityDistributionSpecification = new IfcLightIntensityDistributionSpecification();
}
