import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcTimeSeriesScheduleTypeEnum, { IfcTimeSeriesScheduleTypeEnumDeserializeStep } from "./IfcTimeSeriesScheduleTypeEnum.bldrs"
import IfcTimeSeries from "./IfcTimeSeries.bldrs"
import IfcControl from "./IfcControl.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctimeseriesschedule.htm */
export default  class IfcTimeSeriesSchedule extends IfcControl 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTIMESERIESSCHEDULE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ApplicableDates_? : Array<IfcCalendarDate|IfcLocalTime|IfcDateAndTime> | null;
    private TimeSeriesScheduleType_? : IfcTimeSeriesScheduleTypeEnum;
    private TimeSeries_? : IfcTimeSeries;


    public get ApplicableDates() : Array<IfcCalendarDate|IfcLocalTime|IfcDateAndTime> | null
    {
        if ( this.ApplicableDates_ === void 0 )
        {
            
        }

        return this.ApplicableDates_ as Array<IfcCalendarDate|IfcLocalTime|IfcDateAndTime> | null;
    }


    public get TimeSeriesScheduleType() : IfcTimeSeriesScheduleTypeEnum
    {
        if ( this.TimeSeriesScheduleType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TimeSeriesScheduleType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcTimeSeriesScheduleTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field TimeSeriesScheduleType' );
            };

            this.TimeSeriesScheduleType_ = value;
        }

        return this.TimeSeriesScheduleType_ as IfcTimeSeriesScheduleTypeEnum;
    }


    public get TimeSeries() : IfcTimeSeries
    {
        if ( this.TimeSeries_ === void 0 )
        {
            
        }

        return this.TimeSeries_ as IfcTimeSeries;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
