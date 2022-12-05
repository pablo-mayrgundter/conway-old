
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcHourInDay from "./IfcHourInDay.bldrs"
import IfcMinuteInHour from "./IfcMinuteInHour.bldrs"
import IfcSecondInMinute from "./IfcSecondInMinute.bldrs"
import IfcCoordinatedUniversalTimeOffset from "./IfcCoordinatedUniversalTimeOffset.bldrs"
import IfcDaylightSavingHour from "./IfcDaylightSavingHour.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclocaltime.htm
 */
export default class IfcLocalTime implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcLocalTime';

    public readonly __version__: number = 0;

    constructor( public readonly HourComponent : IfcHourInDay , public readonly MinuteComponent : IfcMinuteInHour  | undefined, public readonly SecondComponent : IfcSecondInMinute  | undefined, public readonly Zone : IfcCoordinatedUniversalTimeOffset  | undefined, public readonly DaylightSavingOffset : IfcDaylightSavingHour  | undefined ) {}
}

export class IfcLocalTimeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcLocalTime';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'HourComponent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcHourInDay'
		}, 
		{
			name: 'MinuteComponent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMinuteInHour'
		}, 
		{
			name: 'SecondComponent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSecondInMinute'
		}, 
		{
			name: 'Zone',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCoordinatedUniversalTimeOffset'
		}, 
		{
			name: 'DaylightSavingOffset',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDaylightSavingHour'
		}
    ];
}
