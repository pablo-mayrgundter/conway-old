
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcClosedShell from "./IfcClosedShell.bldrs"
import IfcOpenShell from "./IfcOpenShell.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshellbasedsurfacemodel.htm
 */
export default  class IfcShellBasedSurfaceModel extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcShellBasedSurfaceModelSpecification = IfcShellBasedSurfaceModelSpecification.instance;

private SbsmBoundary_? : Array<IfcClosedShell|IfcOpenShell>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcShellBasedSurfaceModelSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcShellBasedSurfaceModel';

    public readonly required: ReadonlyArray< string > = [ 'IfcShellBasedSurfaceModel', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SbsmBoundary',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcClosedShell|IfcOpenShell>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcShellBasedSurfaceModelSpecification = new IfcShellBasedSurfaceModelSpecification();
}
