
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPoint from "./IfcPoint.bldrs"
import IfcVertexPoint from "./IfcVertexPoint.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionpointgeometry.htm
 */
export default  class IfcConnectionPointGeometry extends IfcConnectionGeometry 
{    
    public readonly specification: IfcConnectionPointGeometrySpecification = IfcConnectionPointGeometrySpecification.instance;

private PointOnRelatingElement_? : IfcPoint|IfcVertexPoint
    private PointOnRelatedElement_? : IfcPoint|IfcVertexPoint

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcConnectionPointGeometrySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConnectionPointGeometry';

    public readonly required: ReadonlyArray< string > = [ 'IfcConnectionPointGeometry', 'IfcConnectionGeometry' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PointOnRelatingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPoint|IfcVertexPoint',
			optional: false
		}, 
		{
			name: 'PointOnRelatedElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPoint|IfcVertexPoint',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConnectionPointGeometrySpecification = new IfcConnectionPointGeometrySpecification();
}
