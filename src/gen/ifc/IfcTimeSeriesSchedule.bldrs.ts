
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcCalendarDate} from "./IfcCalendarDate.bldrs"
import {IfcLocalTime} from "./IfcLocalTime.bldrs"
import {IfcDateAndTime} from "./IfcDateAndTime.bldrs"
import {IfcTimeSeriesScheduleTypeEnum} from "./IfcTimeSeriesScheduleTypeEnum.bldrs"
import {IfcTimeSeries} from "./IfcTimeSeries.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctimeseriesschedule.htm
 */
export default class IfcTimeSeriesSchedule implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTimeSeriesSchedule';

    public readonly __version__: number = 0;

	ApplicableDates? : Array<IfcCalendarDate|IfcLocalTime|IfcDateAndTime>;
	TimeSeriesScheduleType : IfcTimeSeriesScheduleTypeEnum;
	TimeSeries : IfcTimeSeries;

}

export class IfcTimeSeriesScheduleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTimeSeriesSchedule';

    public readonly required: string[] = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ApplicableDates',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCalendarDate|IfcLocalTime|IfcDateAndTime>'
		}, 
		{
			name: 'TimeSeriesScheduleType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeSeriesScheduleTypeEnum'
		}, 
		{
			name: 'TimeSeries',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeSeries'
		}
    ];
}
