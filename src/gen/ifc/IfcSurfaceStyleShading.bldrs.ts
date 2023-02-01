
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcColourRgb from "./IfcColourRgb.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestyleshading.htm
 */
export default  class IfcSurfaceStyleShading extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcSurfaceStyleShadingSpecification = IfcSurfaceStyleShadingSpecification.instance;

private SurfaceColour_? : IfcColourRgb

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSurfaceStyleShadingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSurfaceStyleShading';

    public readonly required: ReadonlyArray< string > = [ 'IfcSurfaceStyleShading' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SurfaceColour',
			isCollection: false,
			rank: 0,
			baseType: 'IfcColourRgb',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSurfaceStyleShadingSpecification = new IfcSurfaceStyleShadingSpecification();
}
