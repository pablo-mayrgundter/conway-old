
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcDayInMonthNumber} from "./IfcDayInMonthNumber.bldrs"
import {IfcMonthInYearNumber} from "./IfcMonthInYearNumber.bldrs"
import {IfcYearNumber} from "./IfcYearNumber.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccalendardate.htm
 */
export default class IfcCalendarDate implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCalendarDate';

    public readonly __version__: number = 0;

	DayComponent : IfcDayInMonthNumber;
	MonthComponent : IfcMonthInYearNumber;
	YearComponent : IfcYearNumber;

}

export class IfcCalendarDateSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCalendarDate';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'DayComponent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDayInMonthNumber'
		}, 
		{
			name: 'MonthComponent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMonthInYearNumber'
		}, 
		{
			name: 'YearComponent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcYearNumber'
		}
    ];
}
