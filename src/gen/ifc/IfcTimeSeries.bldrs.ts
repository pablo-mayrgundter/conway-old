import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcTimeSeriesDataTypeEnum, { IfcTimeSeriesDataTypeEnumDeserializeStep } from "./IfcTimeSeriesDataTypeEnum.bldrs"
import IfcDataOriginEnum, { IfcDataOriginEnumDeserializeStep } from "./IfcDataOriginEnum.bldrs"
import IfcDerivedUnit from "./IfcDerivedUnit.bldrs"
import IfcNamedUnit from "./IfcNamedUnit.bldrs"
import IfcMonetaryUnit from "./IfcMonetaryUnit.bldrs"
import IfcTimeSeriesReferenceRelationship from "./IfcTimeSeriesReferenceRelationship.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctimeseries.htm */
export default abstract class IfcTimeSeries extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTIMESERIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Name_? : IfcLabel;
    private Description_? : IfcText | null;
    private StartTime_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
    private EndTime_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
    private TimeSeriesDataType_? : IfcTimeSeriesDataTypeEnum;
    private DataOrigin_? : IfcDataOriginEnum;
    private UserDefinedDataOrigin_? : IfcLabel | null;
    private Unit_? : IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit | null;


    public get Name() : IfcLabel
    {
        if ( this.Name_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Name due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field Name' );
            };

            this.Name_ = value;
        }

        return this.Name_ as IfcLabel;
    }


    public get Description() : IfcText | null
    {
        if ( this.Description_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Description due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Description' );
                }

                this.Description_ = null;                
            }
            else
            {
                this.Description_ = value;
            }
        }

        return this.Description_ as IfcText | null;
    }


    public get StartTime() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    {
        if ( this.StartTime_ === void 0 )
        {
            
        }

        return this.StartTime_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
    }


    public get EndTime() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    {
        if ( this.EndTime_ === void 0 )
        {
            
        }

        return this.EndTime_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
    }


    public get TimeSeriesDataType() : IfcTimeSeriesDataTypeEnum
    {
        if ( this.TimeSeriesDataType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TimeSeriesDataType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcTimeSeriesDataTypeEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field TimeSeriesDataType' );
            };

            this.TimeSeriesDataType_ = value;
        }

        return this.TimeSeriesDataType_ as IfcTimeSeriesDataTypeEnum;
    }


    public get DataOrigin() : IfcDataOriginEnum
    {
        if ( this.DataOrigin_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field DataOrigin due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcDataOriginEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field DataOrigin' );
            };

            this.DataOrigin_ = value;
        }

        return this.DataOrigin_ as IfcDataOriginEnum;
    }


    public get UserDefinedDataOrigin() : IfcLabel | null
    {
        if ( this.UserDefinedDataOrigin_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field UserDefinedDataOrigin due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field UserDefinedDataOrigin' );
                }

                this.UserDefinedDataOrigin_ = null;                
            }
            else
            {
                this.UserDefinedDataOrigin_ = value;
            }
        }

        return this.UserDefinedDataOrigin_ as IfcLabel | null;
    }


    public get Unit() : IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit | null
    {
        if ( this.Unit_ === void 0 )
        {
            
        }

        return this.Unit_ as IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit | null;
    }




    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
