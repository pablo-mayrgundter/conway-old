
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSurface from "./IfcSurface.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacesurface.htm
 */
export default  class IfcFaceSurface extends IfcFace 
{    
    public readonly specification: IfcFaceSurfaceSpecification = IfcFaceSurfaceSpecification.instance;

private FaceSurface_? : IfcSurface
    private SameSense_? : boolean

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcFaceSurfaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFaceSurface';

    public readonly required: ReadonlyArray< string > = [ 'IfcFaceSurface', 'IfcFace', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'FaceSurface',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSurface',
			optional: false
		}, 
		{
			name: 'SameSense',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFaceSurfaceSpecification = new IfcFaceSurfaceSpecification();
}
