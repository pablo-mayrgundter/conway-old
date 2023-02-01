
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcVertex from "./IfcVertex.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvertexloop.htm
 */
export default  class IfcVertexLoop extends IfcLoop 
{    
    public readonly specification: IfcVertexLoopSpecification = IfcVertexLoopSpecification.instance;

private LoopVertex_? : IfcVertex

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcVertexLoopSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcVertexLoop';

    public readonly required: ReadonlyArray< string > = [ 'IfcVertexLoop', 'IfcLoop', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'LoopVertex',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVertex',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcVertexLoopSpecification = new IfcVertexLoopSpecification();
}
