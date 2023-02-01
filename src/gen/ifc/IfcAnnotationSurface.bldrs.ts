
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcGeometricRepresentationItem from "./IfcGeometricRepresentationItem.bldrs"
import IfcTextureCoordinate from "./IfcTextureCoordinate.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcannotationsurface.htm
 */
export default  class IfcAnnotationSurface extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcAnnotationSurfaceSpecification = IfcAnnotationSurfaceSpecification.instance;

private Item_? : IfcGeometricRepresentationItem
    private TextureCoordinates_? : IfcTextureCoordinate

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcAnnotationSurfaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAnnotationSurface';

    public readonly required: ReadonlyArray< string > = [ 'IfcAnnotationSurface', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Item',
			isCollection: false,
			rank: 0,
			baseType: 'IfcGeometricRepresentationItem',
			optional: false
		}, 
		{
			name: 'TextureCoordinates',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTextureCoordinate',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAnnotationSurfaceSpecification = new IfcAnnotationSurfaceSpecification();
}
