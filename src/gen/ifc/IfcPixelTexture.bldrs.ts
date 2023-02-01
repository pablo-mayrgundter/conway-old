
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcInteger from "./IfcInteger.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpixeltexture.htm
 */
export default  class IfcPixelTexture extends IfcSurfaceTexture 
{    
    public readonly specification: IfcPixelTextureSpecification = IfcPixelTextureSpecification.instance;

private Width_? : IfcInteger
    private Height_? : IfcInteger
    private ColourComponents_? : IfcInteger
    private Pixel_? : Array<Uint8Array>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPixelTextureSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPixelTexture';

    public readonly required: ReadonlyArray< string > = [ 'IfcPixelTexture', 'IfcSurfaceTexture' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Width',
			isCollection: false,
			rank: 0,
			baseType: 'IfcInteger',
			optional: false
		}, 
		{
			name: 'Height',
			isCollection: false,
			rank: 0,
			baseType: 'IfcInteger',
			optional: false
		}, 
		{
			name: 'ColourComponents',
			isCollection: false,
			rank: 0,
			baseType: 'IfcInteger',
			optional: false
		}, 
		{
			name: 'Pixel',
			isCollection: true,
			rank: 1,
			baseType: 'Array<Uint8Array>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPixelTextureSpecification = new IfcPixelTextureSpecification();
}
