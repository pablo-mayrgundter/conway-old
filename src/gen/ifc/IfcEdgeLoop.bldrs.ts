
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcOrientedEdge from "./IfcOrientedEdge.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcedgeloop.htm
 */
export default  class IfcEdgeLoop extends IfcLoop 
{    
    public readonly specification: IfcEdgeLoopSpecification = IfcEdgeLoopSpecification.instance;

private EdgeList_? : Array<IfcOrientedEdge>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcEdgeLoopSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEdgeLoop';

    public readonly required: ReadonlyArray< string > = [ 'IfcEdgeLoop', 'IfcLoop', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'EdgeList',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcOrientedEdge>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcEdgeLoopSpecification = new IfcEdgeLoopSpecification();
}
