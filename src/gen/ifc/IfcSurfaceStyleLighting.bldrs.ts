
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcColourRgb from "./IfcColourRgb.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylelighting.htm
 */
export default  class IfcSurfaceStyleLighting extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcSurfaceStyleLightingSpecification = IfcSurfaceStyleLightingSpecification.instance;

private DiffuseTransmissionColour_? : IfcColourRgb
    private DiffuseReflectionColour_? : IfcColourRgb
    private TransmissionColour_? : IfcColourRgb
    private ReflectanceColour_? : IfcColourRgb

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSurfaceStyleLightingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSurfaceStyleLighting';

    public readonly required: ReadonlyArray< string > = [ 'IfcSurfaceStyleLighting' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'DiffuseTransmissionColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb',
			optional: false
		}, 
		{
			name: 'DiffuseReflectionColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb',
			optional: false
		}, 
		{
			name: 'TransmissionColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb',
			optional: false
		}, 
		{
			name: 'ReflectanceColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSurfaceStyleLightingSpecification = new IfcSurfaceStyleLightingSpecification();
}
