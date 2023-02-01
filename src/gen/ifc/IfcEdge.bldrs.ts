
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcVertex from "./IfcVertex.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcedge.htm
 */
export default  class IfcEdge extends IfcTopologicalRepresentationItem 
{    
    public readonly specification: IfcEdgeSpecification = IfcEdgeSpecification.instance;

private EdgeStart_? : IfcVertex
    private EdgeEnd_? : IfcVertex

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcEdgeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEdge';

    public readonly required: ReadonlyArray< string > = [ 'IfcEdge', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'EdgeStart',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVertex',
			optional: false
		}, 
		{
			name: 'EdgeEnd',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVertex',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcEdgeSpecification = new IfcEdgeSpecification();
}
