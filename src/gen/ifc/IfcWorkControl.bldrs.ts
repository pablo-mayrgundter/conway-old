
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcTimeMeasure from "./IfcTimeMeasure.bldrs"
import IfcWorkControlTypeEnum from "./IfcWorkControlTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcworkcontrol.htm
 */
export default class IfcWorkControl implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcWorkControl';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcWorkControlSpecification = IfcWorkControlSpecification.instance;

    constructor( public readonly Identifier : IfcIdentifier , public readonly CreationDate : IfcCalendarDate|IfcLocalTime|IfcDateAndTime , public readonly Creators : Array<IfcPerson>  | undefined, public readonly Purpose : IfcLabel  | undefined, public readonly Duration : IfcTimeMeasure  | undefined, public readonly TotalFloat : IfcTimeMeasure  | undefined, public readonly StartTime : IfcCalendarDate|IfcLocalTime|IfcDateAndTime , public readonly FinishTime : IfcCalendarDate|IfcLocalTime|IfcDateAndTime  | undefined, public readonly WorkControlType : IfcWorkControlTypeEnum  | undefined, public readonly UserDefinedControlType : IfcLabel  | undefined ) {}
}

export class IfcWorkControlSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcWorkControl';

    public readonly required: ReadonlyArray< string > = [ 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Identifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}, 
		{
			name: 'CreationDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}, 
		{
			name: 'Creators',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPerson>'
		}, 
		{
			name: 'Purpose',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Duration',
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
			name: 'StartTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}, 
		{
			name: 'FinishTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}, 
		{
			name: 'WorkControlType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcWorkControlTypeEnum'
		}, 
		{
			name: 'UserDefinedControlType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcWorkControlSpecification = new IfcWorkControlSpecification();
}
