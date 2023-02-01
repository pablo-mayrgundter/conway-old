
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcEdge from "./IfcEdge.bldrs"
import IfcVertex from "./IfcVertex.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorientededge.htm
 */
export default  class IfcOrientedEdge extends IfcEdge 
{    
    public readonly specification: IfcOrientedEdgeSpecification = IfcOrientedEdgeSpecification.instance;

private EdgeElement_? : IfcEdge
    private Orientation_? : boolean

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcOrientedEdgeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOrientedEdge';

    public readonly required: ReadonlyArray< string > = [ 'IfcOrientedEdge', 'IfcEdge', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'EdgeElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcEdge',
			optional: false
		}, 
		{
			name: 'Orientation',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcOrientedEdgeSpecification = new IfcOrientedEdgeSpecification();
}
