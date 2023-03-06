import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcBuildingElement from "./IfcBuildingElement.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcstairflight.htm */
export default  class IfcStairFlight extends IfcBuildingElement 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSTAIRFLIGHT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private NumberOfRiser_? : number | null;
    private NumberOfTreads_? : number | null;
    private RiserHeight_? : IfcPositiveLengthMeasure | null;
    private TreadLength_? : IfcPositiveLengthMeasure | null;


    public get NumberOfRiser() : number | null
    {
        if ( this.NumberOfRiser_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field NumberOfRiser due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field NumberOfRiser' );
                }

                this.NumberOfRiser_ = null;                
            }
            else
            {
                this.NumberOfRiser_ = value;
            }
        }

        return this.NumberOfRiser_ as number | null;
    }


    public get NumberOfTreads() : number | null
    {
        if ( this.NumberOfTreads_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field NumberOfTreads due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field NumberOfTreads' );
                }

                this.NumberOfTreads_ = null;                
            }
            else
            {
                this.NumberOfTreads_ = value;
            }
        }

        return this.NumberOfTreads_ as number | null;
    }


    public get RiserHeight() : IfcPositiveLengthMeasure | null
    {
        if ( this.RiserHeight_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field RiserHeight due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field RiserHeight' );
                }

                this.RiserHeight_ = null;                
            }
            else
            {
                this.RiserHeight_ = value;
            }
        }

        return this.RiserHeight_ as IfcPositiveLengthMeasure | null;
    }


    public get TreadLength() : IfcPositiveLengthMeasure | null
    {
        if ( this.TreadLength_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 11 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TreadLength due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 11;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field TreadLength' );
                }

                this.TreadLength_ = null;                
            }
            else
            {
                this.TreadLength_ = value;
            }
        }

        return this.TreadLength_ as IfcPositiveLengthMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
