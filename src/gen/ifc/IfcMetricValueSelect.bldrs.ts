
import IfcDateTimeSelect from "./IfcDateTimeSelect.bldrs"
import IfcMeasureWithUnit from "./IfcMeasureWithUnit.bldrs"
import IfcTable from "./IfcTable.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcTimeSeries from "./IfcTimeSeries.bldrs"
import IfcCostValue from "./IfcCostValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmetricvalueselect.htm
 */

export default class IfcMetricValueSelect
{
    constructor( public readonly value: IfcMetricValueSelectVariant ) {}
}

export type IfcMetricValueSelectType = 'IfcDateTimeSelect'|'IfcMeasureWithUnit'|'IfcTable'|'IfcText'|'IfcTimeSeries'|'IfcCostValue';

export type IfcMetricValueSelectChoices = IfcDateTimeSelect|IfcMeasureWithUnit|IfcTable|IfcText|IfcTimeSeries|IfcCostValue;

export type IfcMetricValueSelectVariant = ({ type: 'IfcDateTimeSelect'; value: IfcDateTimeSelect }|{ type: 'IfcMeasureWithUnit'; value: IfcMeasureWithUnit }|{ type: 'IfcTable'; value: IfcTable }|{ type: 'IfcText'; value: IfcText }|{ type: 'IfcTimeSeries'; value: IfcTimeSeries }|{ type: 'IfcCostValue'; value: IfcCostValue }) & { type: IfcMetricValueSelectType; value: IfcMetricValueSelectChoices };

export function IfcMetricValueSelectSerializer( value?: IfcMetricValueSelect, to: SmartBuffer, offset?: number )
{
    switch
    
}
