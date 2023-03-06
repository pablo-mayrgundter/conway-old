import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcPlaneAngleMeasure from "./IfcPlaneAngleMeasure.bldrs"
import IfcStructuralLoadStatic from "./IfcStructuralLoadStatic.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcstructuralloadsingledisplacement.htm */
export default  class IfcStructuralLoadSingleDisplacement extends IfcStructuralLoadStatic 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSTRUCTURALLOADSINGLEDISPLACEMENT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private DisplacementX_? : IfcLengthMeasure | null;
    private DisplacementY_? : IfcLengthMeasure | null;
    private DisplacementZ_? : IfcLengthMeasure | null;
    private RotationalDisplacementRX_? : IfcPlaneAngleMeasure | null;
    private RotationalDisplacementRY_? : IfcPlaneAngleMeasure | null;
    private RotationalDisplacementRZ_? : IfcPlaneAngleMeasure | null;


    public get DisplacementX() : IfcLengthMeasure | null
    {
        if ( this.DisplacementX_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field DisplacementX due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field DisplacementX' );
                }

                this.DisplacementX_ = null;                
            }
            else
            {
                this.DisplacementX_ = value;
            }
        }

        return this.DisplacementX_ as IfcLengthMeasure | null;
    }


    public get DisplacementY() : IfcLengthMeasure | null
    {
        if ( this.DisplacementY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field DisplacementY due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field DisplacementY' );
                }

                this.DisplacementY_ = null;                
            }
            else
            {
                this.DisplacementY_ = value;
            }
        }

        return this.DisplacementY_ as IfcLengthMeasure | null;
    }


    public get DisplacementZ() : IfcLengthMeasure | null
    {
        if ( this.DisplacementZ_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field DisplacementZ due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field DisplacementZ' );
                }

                this.DisplacementZ_ = null;                
            }
            else
            {
                this.DisplacementZ_ = value;
            }
        }

        return this.DisplacementZ_ as IfcLengthMeasure | null;
    }


    public get RotationalDisplacementRX() : IfcPlaneAngleMeasure | null
    {
        if ( this.RotationalDisplacementRX_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field RotationalDisplacementRX due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field RotationalDisplacementRX' );
                }

                this.RotationalDisplacementRX_ = null;                
            }
            else
            {
                this.RotationalDisplacementRX_ = value;
            }
        }

        return this.RotationalDisplacementRX_ as IfcPlaneAngleMeasure | null;
    }


    public get RotationalDisplacementRY() : IfcPlaneAngleMeasure | null
    {
        if ( this.RotationalDisplacementRY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field RotationalDisplacementRY due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field RotationalDisplacementRY' );
                }

                this.RotationalDisplacementRY_ = null;                
            }
            else
            {
                this.RotationalDisplacementRY_ = value;
            }
        }

        return this.RotationalDisplacementRY_ as IfcPlaneAngleMeasure | null;
    }


    public get RotationalDisplacementRZ() : IfcPlaneAngleMeasure | null
    {
        if ( this.RotationalDisplacementRZ_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field RotationalDisplacementRZ due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field RotationalDisplacementRZ' );
                }

                this.RotationalDisplacementRZ_ = null;                
            }
            else
            {
                this.RotationalDisplacementRZ_ = value;
            }
        }

        return this.RotationalDisplacementRZ_ as IfcPlaneAngleMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
