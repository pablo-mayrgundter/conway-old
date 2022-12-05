
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcScheduleTimeControl from "./IfcScheduleTimeControl.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstasks.htm
 */
export default class IfcRelAssignsTasks implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelAssignsTasks';

    public readonly __version__: number = 0;

    constructor( public readonly TimeForTask : IfcScheduleTimeControl  | undefined ) {}
}

export class IfcRelAssignsTasksSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssignsTasks';

    public readonly required: string[] = [ 'IfcRelAssignsToControl', 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'TimeForTask',
			isCollection: false,
			rank: 0,
			baseType: 'IfcScheduleTimeControl'
		}
    ];
}
