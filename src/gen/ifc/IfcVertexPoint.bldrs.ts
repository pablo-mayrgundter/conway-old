
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPoint from "./IfcPoint.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvertexpoint.htm
 */
export default  class IfcVertexPoint extends IfcVertex 
{    
    public readonly specification: IfcVertexPointSpecification = IfcVertexPointSpecification.instance;

private VertexGeometry_? : IfcPoint

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcVertexPointSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcVertexPoint';

    public readonly required: ReadonlyArray< string > = [ 'IfcVertexPoint', 'IfcVertex', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'VertexGeometry',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPoint',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcVertexPointSpecification = new IfcVertexPointSpecification();
}
