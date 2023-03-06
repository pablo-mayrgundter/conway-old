import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcStructuralConnectionCondition from "./IfcStructuralConnectionCondition.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcslippageconnectioncondition.htm */
export default  class IfcSlippageConnectionCondition extends IfcStructuralConnectionCondition 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSLIPPAGECONNECTIONCONDITION;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private SlippageX_? : IfcLengthMeasure | null;
    private SlippageY_? : IfcLengthMeasure | null;
    private SlippageZ_? : IfcLengthMeasure | null;


    public get SlippageX() : IfcLengthMeasure | null
    {
        if ( this.SlippageX_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SlippageX due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field SlippageX' );
                }

                this.SlippageX_ = null;                
            }
            else
            {
                this.SlippageX_ = value;
            }
        }

        return this.SlippageX_ as IfcLengthMeasure | null;
    }


    public get SlippageY() : IfcLengthMeasure | null
    {
        if ( this.SlippageY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SlippageY due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field SlippageY' );
                }

                this.SlippageY_ = null;                
            }
            else
            {
                this.SlippageY_ = value;
            }
        }

        return this.SlippageY_ as IfcLengthMeasure | null;
    }


    public get SlippageZ() : IfcLengthMeasure | null
    {
        if ( this.SlippageZ_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SlippageZ due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field SlippageZ' );
                }

                this.SlippageZ_ = null;                
            }
            else
            {
                this.SlippageZ_ = value;
            }
        }

        return this.SlippageZ_ as IfcLengthMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
