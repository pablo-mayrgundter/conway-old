
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSurfaceSide from "./IfcSurfaceSide.bldrs"
import IfcSurfaceStyleShading from "./IfcSurfaceStyleShading.bldrs"
import IfcSurfaceStyleLighting from "./IfcSurfaceStyleLighting.bldrs"
import IfcSurfaceStyleWithTextures from "./IfcSurfaceStyleWithTextures.bldrs"
import IfcExternallyDefinedSurfaceStyle from "./IfcExternallyDefinedSurfaceStyle.bldrs"
import IfcSurfaceStyleRefraction from "./IfcSurfaceStyleRefraction.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestyle.htm
 */
export default  class IfcSurfaceStyle extends IfcPresentationStyle 
{    
    public readonly specification: IfcSurfaceStyleSpecification = IfcSurfaceStyleSpecification.instance;

private Side_? : IfcSurfaceSide
    private Styles_? : Array<IfcSurfaceStyleShading|IfcSurfaceStyleLighting|IfcSurfaceStyleWithTextures|IfcExternallyDefinedSurfaceStyle|IfcSurfaceStyleRefraction>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSurfaceStyleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSurfaceStyle';

    public readonly required: ReadonlyArray< string > = [ 'IfcSurfaceStyle', 'IfcPresentationStyle' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Side',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSurfaceSide',
			optional: false
		}, 
		{
			name: 'Styles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcSurfaceStyleShading|IfcSurfaceStyleLighting|IfcSurfaceStyleWithTextures|IfcExternallyDefinedSurfaceStyle|IfcSurfaceStyleRefraction>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSurfaceStyleSpecification = new IfcSurfaceStyleSpecification();
}
