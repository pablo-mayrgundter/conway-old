
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcTimeSeriesScheduleTypeEnum from "./IfcTimeSeriesScheduleTypeEnum.bldrs"
import IfcTimeSeries from "./IfcTimeSeries.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctimeseriesschedule.htm
 */
export default  class IfcTimeSeriesSchedule extends IfcControl 
{    
    public readonly specification: IfcTimeSeriesScheduleSpecification = IfcTimeSeriesScheduleSpecification.instance;

private ApplicableDates_? : Array<IfcCalendarDate|IfcLocalTime|IfcDateAndTime>
    private TimeSeriesScheduleType_? : IfcTimeSeriesScheduleTypeEnum
    private TimeSeries_? : IfcTimeSeries

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcTimeSeriesScheduleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTimeSeriesSchedule';

    public readonly required: ReadonlyArray< string > = [ 'IfcTimeSeriesSchedule', 'IfcControl', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ApplicableDates',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCalendarDate|IfcLocalTime|IfcDateAndTime>',
			optional: true
		}, 
		{
			name: 'TimeSeriesScheduleType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeSeriesScheduleTypeEnum',
			optional: false
		}, 
		{
			name: 'TimeSeries',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeSeries',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcTimeSeriesScheduleSpecification = new IfcTimeSeriesScheduleSpecification();
}
