import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcRatioMeasure from "./IfcRatioMeasure.bldrs"
import IfcMeasureWithUnit from "./IfcMeasureWithUnit.bldrs"
import IfcMonetaryMeasure from "./IfcMonetaryMeasure.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcReferencesValueDocument from "./IfcReferencesValueDocument.bldrs"
import IfcAppliedValueRelationship from "./IfcAppliedValueRelationship.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcappliedvalue.htm */
export default abstract class IfcAppliedValue extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCAPPLIEDVALUE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Name_? : IfcLabel | null;
    private Description_? : IfcText | null;
    private AppliedValue_? : IfcRatioMeasure|IfcMeasureWithUnit|IfcMonetaryMeasure | null;
    private UnitBasis_? : IfcMeasureWithUnit | null;
    private ApplicableDate_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    private FixedUntilDate_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;


    public get Name() : IfcLabel | null
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

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field Name' );
                }

                this.Name_ = null;                
            }
            else
            {
                this.Name_ = value;
            }
        }

        return this.Name_ as IfcLabel | null;
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


    public get AppliedValue() : IfcRatioMeasure|IfcMeasureWithUnit|IfcMonetaryMeasure | null
    {
        if ( this.AppliedValue_ === void 0 )
        {
            
        }

        return this.AppliedValue_ as IfcRatioMeasure|IfcMeasureWithUnit|IfcMonetaryMeasure | null;
    }


    public get UnitBasis() : IfcMeasureWithUnit | null
    {
        if ( this.UnitBasis_ === void 0 )
        {
            
        }

        return this.UnitBasis_ as IfcMeasureWithUnit | null;
    }


    public get ApplicableDate() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null
    {
        if ( this.ApplicableDate_ === void 0 )
        {
            
        }

        return this.ApplicableDate_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    }


    public get FixedUntilDate() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null
    {
        if ( this.FixedUntilDate_ === void 0 )
        {
            
        }

        return this.FixedUntilDate_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime | null;
    }








    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
