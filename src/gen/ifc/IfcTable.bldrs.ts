
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTableRow from "./IfcTableRow.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctable.htm
 */
export default  class IfcTable extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcTableSpecification = IfcTableSpecification.instance;

private Name_? : string
    private Rows_? : Array<IfcTableRow>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTableSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTable';

    public readonly required: ReadonlyArray< string > = [ 'IfcTable' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'string',
			optional: false
		}, 
		{
			name: 'Rows',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcTableRow>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTableSpecification = new IfcTableSpecification();
}
