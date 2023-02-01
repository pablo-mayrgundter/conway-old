
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLoop from "./IfcLoop.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacebound.htm
 */
export default  class IfcFaceBound extends IfcTopologicalRepresentationItem 
{    
    public readonly specification: IfcFaceBoundSpecification = IfcFaceBoundSpecification.instance;

private Bound_? : IfcLoop
    private Orientation_? : boolean

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcFaceBoundSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFaceBound';

    public readonly required: ReadonlyArray< string > = [ 'IfcFaceBound', 'IfcTopologicalRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Bound',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLoop',
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

    public static readonly instance: IfcFaceBoundSpecification = new IfcFaceBoundSpecification();
}
