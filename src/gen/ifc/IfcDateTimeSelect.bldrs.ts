
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdatetimeselect.htm
 */

export default class IfcDateTimeSelect
{
    constructor( public readonly value: IfcDateTimeSelectVariant ) {}
}

export type IfcDateTimeSelectType = 'IfcCalendarDate'|'IfcLocalTime'|'IfcDateAndTime';

export type IfcDateTimeSelectChoices = IfcCalendarDate|IfcLocalTime|IfcDateAndTime;

export type IfcDateTimeSelectVariant = ({ type: 'IfcCalendarDate'; value: IfcCalendarDate }|{ type: 'IfcLocalTime'; value: IfcLocalTime }|{ type: 'IfcDateAndTime'; value: IfcDateAndTime }) & { type: IfcDateTimeSelectType; value: IfcDateTimeSelectChoices };

export function IfcDateTimeSelectSerializer( value?: IfcDateTimeSelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
