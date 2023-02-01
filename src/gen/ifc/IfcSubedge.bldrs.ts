
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcEdge from "./IfcEdge.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsubedge.htm
 */
export default  class IfcSubedge extends IfcEdge 
{    
    public readonly specification: IfcSubedgeSpecification = IfcSubedgeSpecification.instance;

private ParentEdge_? : IfcEdge

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSubedgeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSubedge';

    public readonly required: ReadonlyArray< string > = [ 'IfcSubedge', 'IfcEdge', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ParentEdge',
			isCollection: false,
			rank: 0,
			baseType: 'IfcEdge',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSubedgeSpecification = new IfcSubedgeSpecification();
}
