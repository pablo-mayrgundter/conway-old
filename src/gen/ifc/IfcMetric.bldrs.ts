
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcBenchmarkEnum} from "./IfcBenchmarkEnum.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcCalendarDate} from "./IfcCalendarDate.bldrs"
import {IfcLocalTime} from "./IfcLocalTime.bldrs"
import {IfcDateAndTime} from "./IfcDateAndTime.bldrs"
import {IfcMeasureWithUnit} from "./IfcMeasureWithUnit.bldrs"
import {IfcTable} from "./IfcTable.bldrs"
import {IfcText} from "./IfcText.bldrs"
import {IfcTimeSeries} from "./IfcTimeSeries.bldrs"
import {IfcCostValue} from "./IfcCostValue.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmetric.htm
 */
export default class IfcMetric implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMetric';

    public readonly __version__: number = 0;

	Benchmark : IfcBenchmarkEnum;
	ValueSource? : IfcLabel;
	DataValue : IfcCalendarDate|IfcLocalTime|IfcDateAndTime|IfcMeasureWithUnit|IfcTable|IfcText|IfcTimeSeries|IfcCostValue;

}

export class IfcMetricSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMetric';

    public readonly required: string[] = [ 'IfcConstraint' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Benchmark',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBenchmarkEnum'
		}, 
		{
			name: 'ValueSource',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'DataValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime|IfcMeasureWithUnit|IfcTable|IfcText|IfcTimeSeries|IfcCostValue'
		}
    ];
}
