import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcApplication from "./IfcApplication.bldrs"
import IfcStateEnum, { IfcStateEnumDeserializeStep } from "./IfcStateEnum.bldrs"
import IfcChangeActionEnum, { IfcChangeActionEnumDeserializeStep } from "./IfcChangeActionEnum.bldrs"
import IfcTimeStamp from "./IfcTimeStamp.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcownerhistory.htm */
export default  class IfcOwnerHistory extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCOWNERHISTORY;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private OwningUser_? : IfcPersonAndOrganization;
    private OwningApplication_? : IfcApplication;
    private State_? : IfcStateEnum | null;
    private ChangeAction_? : IfcChangeActionEnum;
    private LastModifiedDate_? : IfcTimeStamp | null;
    private LastModifyingUser_? : IfcPersonAndOrganization | null;
    private LastModifyingApplication_? : IfcApplication | null;
    private CreationDate_? : IfcTimeStamp;


    public get OwningUser() : IfcPersonAndOrganization
    {
        if ( this.OwningUser_ === void 0 )
        {
            
        }

        return this.OwningUser_ as IfcPersonAndOrganization;
    }


    public get OwningApplication() : IfcApplication
    {
        if ( this.OwningApplication_ === void 0 )
        {
            
        }

        return this.OwningApplication_ as IfcApplication;
    }


    public get State() : IfcStateEnum | null
    {
        if ( this.State_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field State due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcStateEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field State' );
                }

                this.State_ = null;                
            }
            else
            {
                this.State_ = value;
            }
        }

        return this.State_ as IfcStateEnum | null;
    }


    public get ChangeAction() : IfcChangeActionEnum
    {
        if ( this.ChangeAction_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ChangeAction due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcChangeActionEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field ChangeAction' );
            };

            this.ChangeAction_ = value;
        }

        return this.ChangeAction_ as IfcChangeActionEnum;
    }


    public get LastModifiedDate() : IfcTimeStamp | null
    {
        if ( this.LastModifiedDate_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LastModifiedDate due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field LastModifiedDate' );
                }

                this.LastModifiedDate_ = null;                
            }
            else
            {
                this.LastModifiedDate_ = value;
            }
        }

        return this.LastModifiedDate_ as IfcTimeStamp | null;
    }


    public get LastModifyingUser() : IfcPersonAndOrganization | null
    {
        if ( this.LastModifyingUser_ === void 0 )
        {
            
        }

        return this.LastModifyingUser_ as IfcPersonAndOrganization | null;
    }


    public get LastModifyingApplication() : IfcApplication | null
    {
        if ( this.LastModifyingApplication_ === void 0 )
        {
            
        }

        return this.LastModifyingApplication_ as IfcApplication | null;
    }


    public get CreationDate() : IfcTimeStamp
    {
        if ( this.CreationDate_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CreationDate due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field CreationDate' );
            };

            this.CreationDate_ = value;
        }

        return this.CreationDate_ as IfcTimeStamp;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
