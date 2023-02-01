
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRoot from "./IfcRoot.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociates.htm
 */
export default  class IfcRelAssociates extends IfcRelationship 
{    
    public readonly specification: IfcRelAssociatesSpecification = IfcRelAssociatesSpecification.instance;

private RelatedObjects_? : Array<IfcRoot>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelAssociatesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociates';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatedObjects',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcRoot>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssociatesSpecification = new IfcRelAssociatesSpecification();
}
