
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSurfaceTextureEnum from "./IfcSurfaceTextureEnum.bldrs"
import IfcCartesianTransformationOperator2D from "./IfcCartesianTransformationOperator2D.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacetexture.htm
 */
export default abstract class IfcSurfaceTexture extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcSurfaceTextureSpecification = IfcSurfaceTextureSpecification.instance;

private RepeatS_? : boolean
    private RepeatT_? : boolean
    private TextureType_? : IfcSurfaceTextureEnum
    private TextureTransform_? : IfcCartesianTransformationOperator2D

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSurfaceTextureSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSurfaceTexture';

    public readonly required: ReadonlyArray< string > = [ 'IfcSurfaceTexture' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RepeatS',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}, 
		{
			name: 'RepeatT',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}, 
		{
			name: 'TextureType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSurfaceTextureEnum',
			optional: false
		}, 
		{
			name: 'TextureTransform',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianTransformationOperator2D',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSurfaceTextureSpecification = new IfcSurfaceTextureSpecification();
}
