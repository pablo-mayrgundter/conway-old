
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcColourRgb from "./IfcColourRgb.bldrs"
import IfcSpecularExponent from "./IfcSpecularExponent.bldrs"
import IfcSpecularRoughness from "./IfcSpecularRoughness.bldrs"
import IfcReflectanceMethodEnum from "./IfcReflectanceMethodEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylerendering.htm
 */
export default  class IfcSurfaceStyleRendering extends IfcSurfaceStyleShading 
{    
    public readonly specification: IfcSurfaceStyleRenderingSpecification = IfcSurfaceStyleRenderingSpecification.instance;

private Transparency_? : IfcNormalisedRatioMeasure
    private DiffuseColour_? : IfcColourRgb|IfcNormalisedRatioMeasure
    private TransmissionColour_? : IfcColourRgb|IfcNormalisedRatioMeasure
    private DiffuseTransmissionColour_? : IfcColourRgb|IfcNormalisedRatioMeasure
    private ReflectionColour_? : IfcColourRgb|IfcNormalisedRatioMeasure
    private SpecularColour_? : IfcColourRgb|IfcNormalisedRatioMeasure
    private SpecularHighlight_? : IfcSpecularExponent|IfcSpecularRoughness
    private ReflectanceMethod_? : IfcReflectanceMethodEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSurfaceStyleRenderingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSurfaceStyleRendering';

    public readonly required: ReadonlyArray< string > = [ 'IfcSurfaceStyleRendering', 'IfcSurfaceStyleShading' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Transparency',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure',
			optional: true
		}, 
		{
			name: 'DiffuseColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb|IfcNormalisedRatioMeasure',
			optional: true
		}, 
		{
			name: 'TransmissionColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb|IfcNormalisedRatioMeasure',
			optional: true
		}, 
		{
			name: 'DiffuseTransmissionColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb|IfcNormalisedRatioMeasure',
			optional: true
		}, 
		{
			name: 'ReflectionColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb|IfcNormalisedRatioMeasure',
			optional: true
		}, 
		{
			name: 'SpecularColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb|IfcNormalisedRatioMeasure',
			optional: true
		}, 
		{
			name: 'SpecularHighlight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpecularExponent|IfcSpecularRoughness',
			optional: true
		}, 
		{
			name: 'ReflectanceMethod',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReflectanceMethodEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSurfaceStyleRenderingSpecification = new IfcSurfaceStyleRenderingSpecification();
}
