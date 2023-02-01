
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcGroup from "./IfcGroup.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstogroup.htm
 */
export default  class IfcRelAssignsToGroup extends IfcRelAssigns 
{    
    public readonly specification: IfcRelAssignsToGroupSpecification = IfcRelAssignsToGroupSpecification.instance;

private RelatingGroup_? : IfcGroup

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelAssignsToGroupSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssignsToGroup';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssignsToGroup', 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingGroup',
			isCollection: false,
			rank: 0,
			baseType: 'IfcGroup',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssignsToGroupSpecification = new IfcRelAssignsToGroupSpecification();
}
