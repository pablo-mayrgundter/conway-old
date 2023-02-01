
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcTimeMeasure from "./IfcTimeMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcRelAssignsTasks from "./IfcRelAssignsTasks.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcscheduletimecontrol.htm
 */
export default  class IfcScheduleTimeControl extends IfcControl 
{    
    public readonly specification: IfcScheduleTimeControlSpecification = IfcScheduleTimeControlSpecification.instance;

private ActualStart_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    private EarlyStart_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    private LateStart_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    private ScheduleStart_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    private ActualFinish_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    private EarlyFinish_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    private LateFinish_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    private ScheduleFinish_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    private ScheduleDuration_? : IfcTimeMeasure
    private ActualDuration_? : IfcTimeMeasure
    private RemainingTime_? : IfcTimeMeasure
    private FreeFloat_? : IfcTimeMeasure
    private TotalFloat_? : IfcTimeMeasure
    private IsCritical_? : boolean
    private StatusTime_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    private StartFloat_? : IfcTimeMeasure
    private FinishFloat_? : IfcTimeMeasure
    private Completion_? : IfcPositiveRatioMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcScheduleTimeControlSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcScheduleTimeControl';

    public readonly required: ReadonlyArray< string > = [ 'IfcScheduleTimeControl', 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ActualStart',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: true
		}, 
		{
			name: 'EarlyStart',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: true
		}, 
		{
			name: 'LateStart',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: true
		}, 
		{
			name: 'ScheduleStart',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: true
		}, 
		{
			name: 'ActualFinish',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: true
		}, 
		{
			name: 'EarlyFinish',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: true
		}, 
		{
			name: 'LateFinish',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: true
		}, 
		{
			name: 'ScheduleFinish',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: true
		}, 
		{
			name: 'ScheduleDuration',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure',
			optional: true
		}, 
		{
			name: 'ActualDuration',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure',
			optional: true
		}, 
		{
			name: 'RemainingTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure',
			optional: true
		}, 
		{
			name: 'FreeFloat',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure',
			optional: true
		}, 
		{
			name: 'TotalFloat',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure',
			optional: true
		}, 
		{
			name: 'IsCritical',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: true
		}, 
		{
			name: 'StatusTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: true
		}, 
		{
			name: 'StartFloat',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure',
			optional: true
		}, 
		{
			name: 'FinishFloat',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure',
			optional: true
		}, 
		{
			name: 'Completion',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcScheduleTimeControlSpecification = new IfcScheduleTimeControlSpecification();
}
