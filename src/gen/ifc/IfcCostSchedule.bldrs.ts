
import Component from "../../core/component"
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
export default  class IfcCostSchedule extends IfcControl 
{    
    public readonly specification: IfcCostScheduleSpecification = IfcCostScheduleSpecification.instance;

private SubmittedBy_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization
    private PreparedBy_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization
    private SubmittedOn_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    private Status_? : IfcLabel
    private TargetUsers_? : Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization>
    private UpdateDate_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    private ID_? : IfcIdentifier
    private PredefinedType_? : IfcCostScheduleTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCostScheduleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCostSchedule';

    public readonly required: ReadonlyArray< string > = [ 'IfcCostSchedule', 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SubmittedBy',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization|IfcPerson|IfcPersonAndOrganization',
			optional: true
		}, 
		{
			name: 'PreparedBy',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization|IfcPerson|IfcPersonAndOrganization',
			optional: true
		}, 
		{
			name: 'SubmittedOn',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: true
		}, 
		{
			name: 'Status',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'TargetUsers',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization>',
			optional: true
		}, 
		{
			name: 'UpdateDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: true
		}, 
		{
			name: 'ID',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: false
		}, 
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCostScheduleTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCostScheduleSpecification = new IfcCostScheduleSpecification();
}
