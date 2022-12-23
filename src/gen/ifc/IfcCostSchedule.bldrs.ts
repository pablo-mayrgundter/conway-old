
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcCostScheduleTypeEnum from "./IfcCostScheduleTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccostschedule.htm
 */
export default class IfcCostSchedule implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcCostSchedule';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcCostScheduleSpecification = IfcCostScheduleSpecification.instance;

    constructor( public readonly SubmittedBy : IfcOrganization|IfcPerson|IfcPersonAndOrganization  | undefined, public readonly PreparedBy : IfcOrganization|IfcPerson|IfcPersonAndOrganization  | undefined, public readonly SubmittedOn : IfcCalendarDate|IfcLocalTime|IfcDateAndTime  | undefined, public readonly Status : IfcLabel  | undefined, public readonly TargetUsers : Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization>  | undefined, public readonly UpdateDate : IfcCalendarDate|IfcLocalTime|IfcDateAndTime  | undefined, public readonly ID : IfcIdentifier , public readonly PredefinedType : IfcCostScheduleTypeEnum  ) {}
}

export class IfcCostScheduleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCostSchedule';

    public readonly required: ReadonlyArray< string > = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
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

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCostScheduleSpecification = new IfcCostScheduleSpecification();
}
