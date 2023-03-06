import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLinearStiffnessMeasure from "./IfcLinearStiffnessMeasure.bldrs"
import IfcRotationalStiffnessMeasure from "./IfcRotationalStiffnessMeasure.bldrs"
import IfcBoundaryCondition from "./IfcBoundaryCondition.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcboundarynodecondition.htm */
export default  class IfcBoundaryNodeCondition extends IfcBoundaryCondition 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCBOUNDARYNODECONDITION;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private LinearStiffnessX_? : IfcLinearStiffnessMeasure | null;
    private LinearStiffnessY_? : IfcLinearStiffnessMeasure | null;
    private LinearStiffnessZ_? : IfcLinearStiffnessMeasure | null;
    private RotationalStiffnessX_? : IfcRotationalStiffnessMeasure | null;
    private RotationalStiffnessY_? : IfcRotationalStiffnessMeasure | null;
    private RotationalStiffnessZ_? : IfcRotationalStiffnessMeasure | null;


    public get LinearStiffnessX() : IfcLinearStiffnessMeasure | null
    {
        if ( this.LinearStiffnessX_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LinearStiffnessX due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field LinearStiffnessX' );
                }

                this.LinearStiffnessX_ = null;                
            }
            else
            {
                this.LinearStiffnessX_ = value;
            }
        }

        return this.LinearStiffnessX_ as IfcLinearStiffnessMeasure | null;
    }


    public get LinearStiffnessY() : IfcLinearStiffnessMeasure | null
    {
        if ( this.LinearStiffnessY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LinearStiffnessY due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field LinearStiffnessY' );
                }

                this.LinearStiffnessY_ = null;                
            }
            else
            {
                this.LinearStiffnessY_ = value;
            }
        }

        return this.LinearStiffnessY_ as IfcLinearStiffnessMeasure | null;
    }


    public get LinearStiffnessZ() : IfcLinearStiffnessMeasure | null
    {
        if ( this.LinearStiffnessZ_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LinearStiffnessZ due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field LinearStiffnessZ' );
                }

                this.LinearStiffnessZ_ = null;                
            }
            else
            {
                this.LinearStiffnessZ_ = value;
            }
        }

        return this.LinearStiffnessZ_ as IfcLinearStiffnessMeasure | null;
    }


    public get RotationalStiffnessX() : IfcRotationalStiffnessMeasure | null
    {
        if ( this.RotationalStiffnessX_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field RotationalStiffnessX due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field RotationalStiffnessX' );
                }

                this.RotationalStiffnessX_ = null;                
            }
            else
            {
                this.RotationalStiffnessX_ = value;
            }
        }

        return this.RotationalStiffnessX_ as IfcRotationalStiffnessMeasure | null;
    }


    public get RotationalStiffnessY() : IfcRotationalStiffnessMeasure | null
    {
        if ( this.RotationalStiffnessY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field RotationalStiffnessY due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field RotationalStiffnessY' );
                }

                this.RotationalStiffnessY_ = null;                
            }
            else
            {
                this.RotationalStiffnessY_ = value;
            }
        }

        return this.RotationalStiffnessY_ as IfcRotationalStiffnessMeasure | null;
    }


    public get RotationalStiffnessZ() : IfcRotationalStiffnessMeasure | null
    {
        if ( this.RotationalStiffnessZ_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field RotationalStiffnessZ due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field RotationalStiffnessZ' );
                }

                this.RotationalStiffnessZ_ = null;                
            }
            else
            {
                this.RotationalStiffnessZ_ = value;
            }
        }

        return this.RotationalStiffnessZ_ as IfcRotationalStiffnessMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
