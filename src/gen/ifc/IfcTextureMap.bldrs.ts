
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcVertexBasedTextureMap from "./IfcVertexBasedTextureMap.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturemap.htm
 */
export default  class IfcTextureMap extends IfcTextureCoordinate 
{    
    public readonly specification: IfcTextureMapSpecification = IfcTextureMapSpecification.instance;

private TextureMaps_? : Array<IfcVertexBasedTextureMap>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTextureMapSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextureMap';

    public readonly required: ReadonlyArray< string > = [ 'IfcTextureMap', 'IfcTextureCoordinate' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TextureMaps',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcVertexBasedTextureMap>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTextureMapSpecification = new IfcTextureMapSpecification();
}
