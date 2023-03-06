import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcHourInDay from "./IfcHourInDay.bldrs"
import IfcMinuteInHour from "./IfcMinuteInHour.bldrs"
import IfcSecondInMinute from "./IfcSecondInMinute.bldrs"
import IfcCoordinatedUniversalTimeOffset from "./IfcCoordinatedUniversalTimeOffset.bldrs"
import IfcDaylightSavingHour from "./IfcDaylightSavingHour.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifclocaltime.htm */
export default  class IfcLocalTime extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCLOCALTIME;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private HourComponent_? : IfcHourInDay;
    private MinuteComponent_? : IfcMinuteInHour | null;
    private SecondComponent_? : IfcSecondInMinute | null;
    private Zone_? : IfcCoordinatedUniversalTimeOffset | null;
    private DaylightSavingOffset_? : IfcDaylightSavingHour | null;


    public get HourComponent() : IfcHourInDay
    {
        if ( this.HourComponent_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field HourComponent due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field HourComponent' );
            };

            this.HourComponent_ = value;
        }

        return this.HourComponent_ as IfcHourInDay;
    }


    public get MinuteComponent() : IfcMinuteInHour | null
    {
        if ( this.MinuteComponent_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MinuteComponent due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field MinuteComponent' );
                }

                this.MinuteComponent_ = null;                
            }
            else
            {
                this.MinuteComponent_ = value;
            }
        }

        return this.MinuteComponent_ as IfcMinuteInHour | null;
    }


    public get SecondComponent() : IfcSecondInMinute | null
    {
        if ( this.SecondComponent_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SecondComponent due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field SecondComponent' );
                }

                this.SecondComponent_ = null;                
            }
            else
            {
                this.SecondComponent_ = value;
            }
        }

        return this.SecondComponent_ as IfcSecondInMinute | null;
    }


    public get Zone() : IfcCoordinatedUniversalTimeOffset | null
    {
        if ( this.Zone_ === void 0 )
        {
            
        }

        return this.Zone_ as IfcCoordinatedUniversalTimeOffset | null;
    }


    public get DaylightSavingOffset() : IfcDaylightSavingHour | null
    {
        if ( this.DaylightSavingOffset_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field DaylightSavingOffset due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field DaylightSavingOffset' );
                }

                this.DaylightSavingOffset_ = null;                
            }
            else
            {
                this.DaylightSavingOffset_ = value;
            }
        }

        return this.DaylightSavingOffset_ as IfcDaylightSavingHour | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
