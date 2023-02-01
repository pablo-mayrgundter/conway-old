
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcScheduleTimeControl from "./IfcScheduleTimeControl.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstasks.htm
 */
export default  class IfcRelAssignsTasks extends IfcRelAssignsToControl 
{    
    public readonly specification: IfcRelAssignsTasksSpecification = IfcRelAssignsTasksSpecification.instance;

private TimeForTask_? : IfcScheduleTimeControl

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelAssignsTasksSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssignsTasks';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssignsTasks', 'IfcRelAssignsToControl', 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TimeForTask',
			isCollection: false,
			rank: 0,
			baseType: 'IfcScheduleTimeControl',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssignsTasksSpecification = new IfcRelAssignsTasksSpecification();
}
