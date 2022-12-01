
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcOrganization} from "./IfcOrganization.bldrs"
import {IfcPerson} from "./IfcPerson.bldrs"
import {IfcPersonAndOrganization} from "./IfcPersonAndOrganization.bldrs"
import {IfcCalendarDate} from "./IfcCalendarDate.bldrs"
import {IfcLocalTime} from "./IfcLocalTime.bldrs"
import {IfcDateAndTime} from "./IfcDateAndTime.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcIdentifier} from "./IfcIdentifier.bldrs"
import {IfcCostScheduleTypeEnum} from "./IfcCostScheduleTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccostschedule.htm
 */
export default class IfcCostSchedule implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCostSchedule';

    public readonly __version__: number = 0;

	SubmittedBy? : IfcOrganization|IfcPerson|IfcPersonAndOrganization;
	PreparedBy? : IfcOrganization|IfcPerson|IfcPersonAndOrganization;
	SubmittedOn? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
	Status? : IfcLabel;
	TargetUsers? : Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization>;
	UpdateDate? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
	ID : IfcIdentifier;
	PredefinedType : IfcCostScheduleTypeEnum;

}

export class IfcCostScheduleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCostSchedule';

    public readonly required: string[] = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'SubmittedBy',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization|IfcPerson|IfcPersonAndOrganization'
		}, 
		{
			name: 'PreparedBy',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization|IfcPerson|IfcPersonAndOrganization'
		}, 
		{
			name: 'SubmittedOn',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}, 
		{
			name: 'Status',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'TargetUsers',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization>'
		}, 
		{
			name: 'UpdateDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}, 
		{
			name: 'ID',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}, 
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCostScheduleTypeEnum'
		}
    ];
}
