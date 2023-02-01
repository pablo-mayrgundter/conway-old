
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcColourRgb from "./IfcColourRgb.bldrs"
import IfcThermodynamicTemperatureMeasure from "./IfcThermodynamicTemperatureMeasure.bldrs"
import IfcLuminousFluxMeasure from "./IfcLuminousFluxMeasure.bldrs"
import IfcLightEmissionSourceEnum from "./IfcLightEmissionSourceEnum.bldrs"
import IfcExternalReference from "./IfcExternalReference.bldrs"
import IfcLightIntensityDistribution from "./IfcLightIntensityDistribution.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcegoniometric.htm
 */
export default  class IfcLightSourceGoniometric extends IfcLightSource 
{    
    public readonly specification: IfcLightSourceGoniometricSpecification = IfcLightSourceGoniometricSpecification.instance;

private Position_? : IfcAxis2Placement3D
    private ColourAppearance_? : IfcColourRgb
    private ColourTemperature_? : IfcThermodynamicTemperatureMeasure
    private LuminousFlux_? : IfcLuminousFluxMeasure
    private LightEmissionSource_? : IfcLightEmissionSourceEnum
    private LightDistributionDataSource_? : IfcExternalReference|IfcLightIntensityDistribution

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcLightSourceGoniometricSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLightSourceGoniometric';

    public readonly required: ReadonlyArray< string > = [ 'IfcLightSourceGoniometric', 'IfcLightSource', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Position',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement3D',
			optional: false
		}, 
		{
			name: 'ColourAppearance',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb',
			optional: true
		}, 
		{
			name: 'ColourTemperature',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermodynamicTemperatureMeasure',
			optional: false
		}, 
		{
			name: 'LuminousFlux',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLuminousFluxMeasure',
			optional: false
		}, 
		{
			name: 'LightEmissionSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLightEmissionSourceEnum',
			optional: false
		}, 
		{
			name: 'LightDistributionDataSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcExternalReference|IfcLightIntensityDistribution',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcLightSourceGoniometricSpecification = new IfcLightSourceGoniometricSpecification();
}
