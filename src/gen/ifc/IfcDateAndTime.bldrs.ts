
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdateandtime.htm
 */
export default class IfcDateAndTime implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDateAndTime';

    public readonly __version__: number = 0;

    constructor( public readonly DateComponent : IfcCalendarDate , public readonly TimeComponent : IfcLocalTime  ) {}
}

export class IfcDateAndTimeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDateAndTime';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'DateComponent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate'
		}, 
		{
			name: 'TimeComponent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLocalTime'
		}
    ];
}
