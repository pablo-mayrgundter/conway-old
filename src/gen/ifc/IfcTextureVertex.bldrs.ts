
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcParameterValue from "./IfcParameterValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturevertex.htm
 */
export default  class IfcTextureVertex extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcTextureVertexSpecification = IfcTextureVertexSpecification.instance;

private Coordinates_? : Array<IfcParameterValue>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTextureVertexSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTextureVertex';

    public readonly required: ReadonlyArray< string > = [ 'IfcTextureVertex' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Coordinates',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcParameterValue>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTextureVertexSpecification = new IfcTextureVertexSpecification();
}
