
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcworkschedule.htm
 */
export default class IfcWorkSchedule implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcWorkSchedule';

    public readonly __version__: number = 0;

    constructor(  ) {}
}

export class IfcWorkScheduleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcWorkSchedule';

    public readonly required: string[] = [ 'IfcWorkControl', 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
    ];
}
