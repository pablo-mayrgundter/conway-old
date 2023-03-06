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
import IfcTimeMeasure from "./IfcTimeMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcRelAssignsTasks from "./IfcRelAssignsTasks.bldrs"
import IfcControl from "./IfcControl.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcscheduletimecontrol.htm */
export default  class IfcScheduleTimeControl extends IfcControl 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSCHEDULETIMECONTROL;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ActualStart_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    private EarlyStart_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    private LateStart_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    private ScheduleStart_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    private ActualFinish_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    private EarlyFinish_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    private LateFinish_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    private ScheduleFinish_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    private ScheduleDuration_? : IfcTimeMeasure | null;
    private ActualDuration_? : IfcTimeMeasure | null;
    private RemainingTime_? : IfcTimeMeasure | null;
    private FreeFloat_? : IfcTimeMeasure | null;
    private TotalFloat_? : IfcTimeMeasure | null;
    private IsCritical_? : boolean | null;
    private StatusTime_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    private StartFloat_? : IfcTimeMeasure | null;
    private FinishFloat_? : IfcTimeMeasure | null;
    private Completion_? : IfcPositiveRatioMeasure | null;


    public get ActualStart() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null
    {
        if ( this.ActualStart_ === void 0 )
        {
            
        }

        return this.ActualStart_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    }


    public get EarlyStart() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null
    {
        if ( this.EarlyStart_ === void 0 )
        {
            
        }

        return this.EarlyStart_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    }


    public get LateStart() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null
    {
        if ( this.LateStart_ === void 0 )
        {
            
        }

        return this.LateStart_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    }


    public get ScheduleStart() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null
    {
        if ( this.ScheduleStart_ === void 0 )
        {
            
        }

        return this.ScheduleStart_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    }


    public get ActualFinish() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null
    {
        if ( this.ActualFinish_ === void 0 )
        {
            
        }

        return this.ActualFinish_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    }


    public get EarlyFinish() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null
    {
        if ( this.EarlyFinish_ === void 0 )
        {
            
        }

        return this.EarlyFinish_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    }


    public get LateFinish() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null
    {
        if ( this.LateFinish_ === void 0 )
        {
            
        }

        return this.LateFinish_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    }


    public get ScheduleFinish() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null
    {
        if ( this.ScheduleFinish_ === void 0 )
        {
            
        }

        return this.ScheduleFinish_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    }


    public get ScheduleDuration() : IfcTimeMeasure | null
    {
        if ( this.ScheduleDuration_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 13 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ScheduleDuration due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 13;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field ScheduleDuration' );
                }

                this.ScheduleDuration_ = null;                
            }
            else
            {
                this.ScheduleDuration_ = value;
            }
        }

        return this.ScheduleDuration_ as IfcTimeMeasure | null;
    }


    public get ActualDuration() : IfcTimeMeasure | null
    {
        if ( this.ActualDuration_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 14 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ActualDuration due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 14;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field ActualDuration' );
                }

                this.ActualDuration_ = null;                
            }
            else
            {
                this.ActualDuration_ = value;
            }
        }

        return this.ActualDuration_ as IfcTimeMeasure | null;
    }


    public get RemainingTime() : IfcTimeMeasure | null
    {
        if ( this.RemainingTime_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 15 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field RemainingTime due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 15;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field RemainingTime' );
                }

                this.RemainingTime_ = null;                
            }
            else
            {
                this.RemainingTime_ = value;
            }
        }

        return this.RemainingTime_ as IfcTimeMeasure | null;
    }


    public get FreeFloat() : IfcTimeMeasure | null
    {
        if ( this.FreeFloat_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 16 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FreeFloat due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 16;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field FreeFloat' );
                }

                this.FreeFloat_ = null;                
            }
            else
            {
                this.FreeFloat_ = value;
            }
        }

        return this.FreeFloat_ as IfcTimeMeasure | null;
    }


    public get TotalFloat() : IfcTimeMeasure | null
    {
        if ( this.TotalFloat_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 17 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TotalFloat due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 17;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field TotalFloat' );
                }

                this.TotalFloat_ = null;                
            }
            else
            {
                this.TotalFloat_ = value;
            }
        }

        return this.TotalFloat_ as IfcTimeMeasure | null;
    }


    public get IsCritical() : boolean | null
    {
        if ( this.IsCritical_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 18 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field IsCritical due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 18;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractBoolean( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field IsCritical' );
                }

                this.IsCritical_ = null;                
            }
            else
            {
                this.IsCritical_ = value;
            }
        }

        return this.IsCritical_ as boolean | null;
    }


    public get StatusTime() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null
    {
        if ( this.StatusTime_ === void 0 )
        {
            
        }

        return this.StatusTime_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    }


    public get StartFloat() : IfcTimeMeasure | null
    {
        if ( this.StartFloat_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 20 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field StartFloat due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 20;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field StartFloat' );
                }

                this.StartFloat_ = null;                
            }
            else
            {
                this.StartFloat_ = value;
            }
        }

        return this.StartFloat_ as IfcTimeMeasure | null;
    }


    public get FinishFloat() : IfcTimeMeasure | null
    {
        if ( this.FinishFloat_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 21 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FinishFloat due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 21;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field FinishFloat' );
                }

                this.FinishFloat_ = null;                
            }
            else
            {
                this.FinishFloat_ = value;
            }
        }

        return this.FinishFloat_ as IfcTimeMeasure | null;
    }


    public get Completion() : IfcPositiveRatioMeasure | null
    {
        if ( this.Completion_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 22 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Completion due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 22;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Completion' );
                }

                this.Completion_ = null;                
            }
            else
            {
                this.Completion_ = value;
            }
        }

        return this.Completion_ as IfcPositiveRatioMeasure | null;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
