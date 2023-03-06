import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcCostScheduleTypeEnum, { IfcCostScheduleTypeEnumDeserializeStep } from "./IfcCostScheduleTypeEnum.bldrs"
import IfcControl from "./IfcControl.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccostschedule.htm */
export default  class IfcCostSchedule extends IfcControl 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCOSTSCHEDULE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private SubmittedBy_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization | null;
    private PreparedBy_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization | null;
    private SubmittedOn_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    private Status_? : IfcLabel | null;
    private TargetUsers_? : Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization> | null;
    private UpdateDate_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    private ID_? : IfcIdentifier;
    private PredefinedType_? : IfcCostScheduleTypeEnum;


    public get SubmittedBy() : IfcOrganization|IfcPerson|IfcPersonAndOrganization | null
    {
        if ( this.SubmittedBy_ === void 0 )
        {
            
        }

        return this.SubmittedBy_ as IfcOrganization|IfcPerson|IfcPersonAndOrganization | null;
    }


    public get PreparedBy() : IfcOrganization|IfcPerson|IfcPersonAndOrganization | null
    {
        if ( this.PreparedBy_ === void 0 )
        {
            
        }

        return this.PreparedBy_ as IfcOrganization|IfcPerson|IfcPersonAndOrganization | null;
    }


    public get SubmittedOn() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null
    {
        if ( this.SubmittedOn_ === void 0 )
        {
            
        }

        return this.SubmittedOn_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    }


    public get Status() : IfcLabel | null
    {
        if ( this.Status_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Status due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field Status' );
                }

                this.Status_ = null;                
            }
            else
            {
                this.Status_ = value;
            }
        }

        return this.Status_ as IfcLabel | null;
    }


    public get TargetUsers() : Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization> | null
    {
        if ( this.TargetUsers_ === void 0 )
        {
            
        }

        return this.TargetUsers_ as Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization> | null;
    }


    public get UpdateDate() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null
    {
        if ( this.UpdateDate_ === void 0 )
        {
            
        }

        return this.UpdateDate_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    }


    public get ID() : IfcIdentifier
    {
        if ( this.ID_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 11 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ID due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 11;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field ID' );
            };

            this.ID_ = value;
        }

        return this.ID_ as IfcIdentifier;
    }


    public get PredefinedType() : IfcCostScheduleTypeEnum
    {
        if ( this.PredefinedType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 12 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PredefinedType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 12;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcCostScheduleTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field PredefinedType' );
            };

            this.PredefinedType_ = value;
        }

        return this.PredefinedType_ as IfcCostScheduleTypeEnum;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
