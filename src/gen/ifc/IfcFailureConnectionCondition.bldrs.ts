import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcForceMeasure from "./IfcForceMeasure.bldrs"
import IfcStructuralConnectionCondition from "./IfcStructuralConnectionCondition.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcfailureconnectioncondition.htm */
export default  class IfcFailureConnectionCondition extends IfcStructuralConnectionCondition 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCFAILURECONNECTIONCONDITION;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private TensionFailureX_? : IfcForceMeasure | null;
    private TensionFailureY_? : IfcForceMeasure | null;
    private TensionFailureZ_? : IfcForceMeasure | null;
    private CompressionFailureX_? : IfcForceMeasure | null;
    private CompressionFailureY_? : IfcForceMeasure | null;
    private CompressionFailureZ_? : IfcForceMeasure | null;


    public get TensionFailureX() : IfcForceMeasure | null
    {
        if ( this.TensionFailureX_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TensionFailureX due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field TensionFailureX' );
                }

                this.TensionFailureX_ = null;                
            }
            else
            {
                this.TensionFailureX_ = value;
            }
        }

        return this.TensionFailureX_ as IfcForceMeasure | null;
    }


    public get TensionFailureY() : IfcForceMeasure | null
    {
        if ( this.TensionFailureY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TensionFailureY due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field TensionFailureY' );
                }

                this.TensionFailureY_ = null;                
            }
            else
            {
                this.TensionFailureY_ = value;
            }
        }

        return this.TensionFailureY_ as IfcForceMeasure | null;
    }


    public get TensionFailureZ() : IfcForceMeasure | null
    {
        if ( this.TensionFailureZ_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TensionFailureZ due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field TensionFailureZ' );
                }

                this.TensionFailureZ_ = null;                
            }
            else
            {
                this.TensionFailureZ_ = value;
            }
        }

        return this.TensionFailureZ_ as IfcForceMeasure | null;
    }


    public get CompressionFailureX() : IfcForceMeasure | null
    {
        if ( this.CompressionFailureX_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CompressionFailureX due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field CompressionFailureX' );
                }

                this.CompressionFailureX_ = null;                
            }
            else
            {
                this.CompressionFailureX_ = value;
            }
        }

        return this.CompressionFailureX_ as IfcForceMeasure | null;
    }


    public get CompressionFailureY() : IfcForceMeasure | null
    {
        if ( this.CompressionFailureY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CompressionFailureY due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field CompressionFailureY' );
                }

                this.CompressionFailureY_ = null;                
            }
            else
            {
                this.CompressionFailureY_ = value;
            }
        }

        return this.CompressionFailureY_ as IfcForceMeasure | null;
    }


    public get CompressionFailureZ() : IfcForceMeasure | null
    {
        if ( this.CompressionFailureZ_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CompressionFailureZ due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field CompressionFailureZ' );
                }

                this.CompressionFailureZ_ = null;                
            }
            else
            {
                this.CompressionFailureZ_ = value;
            }
        }

        return this.CompressionFailureZ_ as IfcForceMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
