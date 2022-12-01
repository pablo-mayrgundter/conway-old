
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcCalendarDate} from "./IfcCalendarDate.bldrs"
import {IfcLocalTime} from "./IfcLocalTime.bldrs"
import {IfcDateAndTime} from "./IfcDateAndTime.bldrs"
import {IfcTimeMeasure} from "./IfcTimeMeasure.bldrs"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure.bldrs"
import {IfcRelAssignsTasks} from "./IfcRelAssignsTasks.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcscheduletimecontrol.htm
 */
export default class IfcScheduleTimeControl implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcScheduleTimeControl';

    public readonly __version__: number = 0;

	ActualStart? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
	EarlyStart? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
	LateStart? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
	ScheduleStart? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
	ActualFinish? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
	EarlyFinish? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
	LateFinish? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
	ScheduleFinish? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
	ScheduleDuration? : IfcTimeMeasure;
	ActualDuration? : IfcTimeMeasure;
	RemainingTime? : IfcTimeMeasure;
	FreeFloat? : IfcTimeMeasure;
	TotalFloat? : IfcTimeMeasure;
	IsCritical? : boolean;
	StatusTime? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
	StartFloat? : IfcTimeMeasure;
	FinishFloat? : IfcTimeMeasure;
	Completion? : IfcPositiveRatioMeasure;

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
