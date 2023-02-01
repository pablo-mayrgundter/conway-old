
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcimagetexture.htm
 */
export default  class IfcImageTexture extends IfcSurfaceTexture 
{    
    public readonly specification: IfcImageTextureSpecification = IfcImageTextureSpecification.instance;

private UrlReference_? : IfcIdentifier

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcImageTextureSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcImageTexture';

    public readonly required: ReadonlyArray< string > = [ 'IfcImageTexture', 'IfcSurfaceTexture' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'UrlReference',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcImageTextureSpecification = new IfcImageTextureSpecification();
}
