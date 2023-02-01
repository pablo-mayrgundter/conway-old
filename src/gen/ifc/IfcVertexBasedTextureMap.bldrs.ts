
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTextureVertex from "./IfcTextureVertex.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvertexbasedtexturemap.htm
 */
export default  class IfcVertexBasedTextureMap extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcVertexBasedTextureMapSpecification = IfcVertexBasedTextureMapSpecification.instance;

private TextureVertices_? : Array<IfcTextureVertex>
    private TexturePoints_? : Array<IfcCartesianPoint>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcVertexBasedTextureMapSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcVertexBasedTextureMap';

    public readonly required: ReadonlyArray< string > = [ 'IfcVertexBasedTextureMap' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TextureVertices',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcTextureVertex>',
			optional: false
		}, 
		{
			name: 'TexturePoints',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCartesianPoint>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcVertexBasedTextureMapSpecification = new IfcVertexBasedTextureMapSpecification();
}
