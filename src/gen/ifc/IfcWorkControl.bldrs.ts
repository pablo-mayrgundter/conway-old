import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcTimeMeasure from "./IfcTimeMeasure.bldrs"
import IfcWorkControlTypeEnum, { IfcWorkControlTypeEnumDeserializeStep } from "./IfcWorkControlTypeEnum.bldrs"
import IfcControl from "./IfcControl.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcworkcontrol.htm */
export default abstract class IfcWorkControl extends IfcControl 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCWORKCONTROL;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Identifier_? : IfcIdentifier;
    private CreationDate_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
    private Creators_? : Array<IfcPerson> | null;
    private Purpose_? : IfcLabel | null;
    private Duration_? : IfcTimeMeasure | null;
    private TotalFloat_? : IfcTimeMeasure | null;
    private StartTime_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
    private FinishTime_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    private WorkControlType_? : IfcWorkControlTypeEnum | null;
    private UserDefinedControlType_? : IfcLabel | null;


    public get Identifier() : IfcIdentifier
    {
        if ( this.Identifier_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Identifier due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field Identifier' );
            };

            this.Identifier_ = value;
        }

        return this.Identifier_ as IfcIdentifier;
    }


    public get CreationDate() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    {
        if ( this.CreationDate_ === void 0 )
        {
            
        }

        return this.CreationDate_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
    }


    public get Creators() : Array<IfcPerson> | null
    {
        if ( this.Creators_ === void 0 )
        {
            
        }

        return this.Creators_ as Array<IfcPerson> | null;
    }


    public get Purpose() : IfcLabel | null
    {
        if ( this.Purpose_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Purpose due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Purpose' );
                }

                this.Purpose_ = null;                
            }
            else
            {
                this.Purpose_ = value;
            }
        }

        return this.Purpose_ as IfcLabel | null;
    }


    public get Duration() : IfcTimeMeasure | null
    {
        if ( this.Duration_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Duration due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 9;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Duration' );
                }

                this.Duration_ = null;                
            }
            else
            {
                this.Duration_ = value;
            }
        }

        return this.Duration_ as IfcTimeMeasure | null;
    }


    public get TotalFloat() : IfcTimeMeasure | null
    {
        if ( this.TotalFloat_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TotalFloat due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 10;

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


    public get StartTime() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    {
        if ( this.StartTime_ === void 0 )
        {
            
        }

        return this.StartTime_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
    }


    public get FinishTime() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null
    {
        if ( this.FinishTime_ === void 0 )
        {
            
        }

        return this.FinishTime_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    }


    public get WorkControlType() : IfcWorkControlTypeEnum | null
    {
        if ( this.WorkControlType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 13 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field WorkControlType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 13;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcWorkControlTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field WorkControlType' );
                }

                this.WorkControlType_ = null;                
            }
            else
            {
                this.WorkControlType_ = value;
            }
        }

        return this.WorkControlType_ as IfcWorkControlTypeEnum | null;
    }


    public get UserDefinedControlType() : IfcLabel | null
    {
        if ( this.UserDefinedControlType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 14 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field UserDefinedControlType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 14;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field UserDefinedControlType' );
                }

                this.UserDefinedControlType_ = null;                
            }
            else
            {
                this.UserDefinedControlType_ = value;
            }
        }

        return this.UserDefinedControlType_ as IfcLabel | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
