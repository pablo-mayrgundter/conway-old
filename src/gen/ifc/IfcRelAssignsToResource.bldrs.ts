
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcResource from "./IfcResource.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoresource.htm
 */
export default  class IfcRelAssignsToResource extends IfcRelAssigns 
{    
    public readonly specification: IfcRelAssignsToResourceSpecification = IfcRelAssignsToResourceSpecification.instance;

private RelatingResource_? : IfcResource

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelAssignsToResourceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssignsToResource';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssignsToResource', 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingResource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcResource',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssignsToResourceSpecification = new IfcRelAssignsToResourceSpecification();
}
