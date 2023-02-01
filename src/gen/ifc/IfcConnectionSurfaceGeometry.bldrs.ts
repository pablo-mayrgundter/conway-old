
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSurface from "./IfcSurface.bldrs"
import IfcFaceSurface from "./IfcFaceSurface.bldrs"
import IfcFaceBasedSurfaceModel from "./IfcFaceBasedSurfaceModel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionsurfacegeometry.htm
 */
export default  class IfcConnectionSurfaceGeometry extends IfcConnectionGeometry 
{    
    public readonly specification: IfcConnectionSurfaceGeometrySpecification = IfcConnectionSurfaceGeometrySpecification.instance;

private SurfaceOnRelatingElement_? : IfcSurface|IfcFaceSurface|IfcFaceBasedSurfaceModel
    private SurfaceOnRelatedElement_? : IfcSurface|IfcFaceSurface|IfcFaceBasedSurfaceModel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcConnectionSurfaceGeometrySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConnectionSurfaceGeometry';

    public readonly required: ReadonlyArray< string > = [ 'IfcConnectionSurfaceGeometry', 'IfcConnectionGeometry' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SurfaceOnRelatingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSurface|IfcFaceSurface|IfcFaceBasedSurfaceModel',
			optional: false
		}, 
		{
			name: 'SurfaceOnRelatedElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSurface|IfcFaceSurface|IfcFaceBasedSurfaceModel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConnectionSurfaceGeometrySpecification = new IfcConnectionSurfaceGeometrySpecification();
}
