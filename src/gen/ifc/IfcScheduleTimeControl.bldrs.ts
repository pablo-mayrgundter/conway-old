
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcTimeMeasure from "./IfcTimeMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcRelAssignsTasks from "./IfcRelAssignsTasks.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcscheduletimecontrol.htm
 */
export default class IfcScheduleTimeControl implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcScheduleTimeControl';

    public readonly __version__: number = 0;

    constructor( public readonly ActualStart : IfcCalendarDate|IfcLocalTime|IfcDateAndTime  | undefined, public readonly EarlyStart : IfcCalendarDate|IfcLocalTime|IfcDateAndTime  | undefined, public readonly LateStart : IfcCalendarDate|IfcLocalTime|IfcDateAndTime  | undefined, public readonly ScheduleStart : IfcCalendarDate|IfcLocalTime|IfcDateAndTime  | undefined, public readonly ActualFinish : IfcCalendarDate|IfcLocalTime|IfcDateAndTime  | undefined, public readonly EarlyFinish : IfcCalendarDate|IfcLocalTime|IfcDateAndTime  | undefined, public readonly LateFinish : IfcCalendarDate|IfcLocalTime|IfcDateAndTime  | undefined, public readonly ScheduleFinish : IfcCalendarDate|IfcLocalTime|IfcDateAndTime  | undefined, public readonly ScheduleDuration : IfcTimeMeasure  | undefined, public readonly ActualDuration : IfcTimeMeasure  | undefined, public readonly RemainingTime : IfcTimeMeasure  | undefined, public readonly FreeFloat : IfcTimeMeasure  | undefined, public readonly TotalFloat : IfcTimeMeasure  | undefined, public readonly IsCritical : boolean  | undefined, public readonly StatusTime : IfcCalendarDate|IfcLocalTime|IfcDateAndTime  | undefined, public readonly StartFloat : IfcTimeMeasure  | undefined, public readonly FinishFloat : IfcTimeMeasure  | undefined, public readonly Completion : IfcPositiveRatioMeasure  | undefined ) {}
}

export class IfcScheduleTimeControlSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcScheduleTimeControl';

    public readonly required: string[] = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ActualStart',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}, 
		{
			name: 'EarlyStart',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}, 
		{
			name: 'LateStart',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}, 
		{
			name: 'ScheduleStart',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}, 
		{
			name: 'ActualFinish',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}, 
		{
			name: 'EarlyFinish',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}, 
		{
			name: 'LateFinish',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}, 
		{
			name: 'ScheduleFinish',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}, 
		{
			name: 'ScheduleDuration',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure'
		}, 
		{
			name: 'ActualDuration',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure'
		}, 
		{
			name: 'RemainingTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure'
		}, 
		{
			name: 'FreeFloat',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure'
		}, 
		{
			name: 'TotalFloat',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure'
		}, 
		{
			name: 'IsCritical',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}, 
		{
			name: 'StatusTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}, 
		{
			name: 'StartFloat',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure'
		}, 
		{
			name: 'FinishFloat',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure'
		}, 
		{
			name: 'Completion',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}
    ];
}
