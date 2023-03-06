import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcPlaneAngleMeasure from "./IfcPlaneAngleMeasure.bldrs"
import IfcParameterizedProfileDef from "./IfcParameterizedProfileDef.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifclshapeprofiledef.htm */
export default  class IfcLShapeProfileDef extends IfcParameterizedProfileDef 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCLSHAPEPROFILEDEF;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Depth_? : IfcPositiveLengthMeasure;
    private Width_? : IfcPositiveLengthMeasure | null;
    private Thickness_? : IfcPositiveLengthMeasure;
    private FilletRadius_? : IfcPositiveLengthMeasure | null;
    private EdgeRadius_? : IfcPositiveLengthMeasure | null;
    private LegSlope_? : IfcPlaneAngleMeasure | null;
    private CentreOfGravityInX_? : IfcPositiveLengthMeasure | null;
    private CentreOfGravityInY_? : IfcPositiveLengthMeasure | null;


    public get Depth() : IfcPositiveLengthMeasure
    {
        if ( this.Depth_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Depth due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field Depth' );
            };

            this.Depth_ = value;
        }

        return this.Depth_ as IfcPositiveLengthMeasure;
    }


    public get Width() : IfcPositiveLengthMeasure | null
    {
        if ( this.Width_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Width due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field Width' );
                }

                this.Width_ = null;                
            }
            else
            {
                this.Width_ = value;
            }
        }

        return this.Width_ as IfcPositiveLengthMeasure | null;
    }


    public get Thickness() : IfcPositiveLengthMeasure
    {
        if ( this.Thickness_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field Thickness due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field Thickness' );
            };

            this.Thickness_ = value;
        }

        return this.Thickness_ as IfcPositiveLengthMeasure;
    }


    public get FilletRadius() : IfcPositiveLengthMeasure | null
    {
        if ( this.FilletRadius_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FilletRadius due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field FilletRadius' );
                }

                this.FilletRadius_ = null;                
            }
            else
            {
                this.FilletRadius_ = value;
            }
        }

        return this.FilletRadius_ as IfcPositiveLengthMeasure | null;
    }


    public get EdgeRadius() : IfcPositiveLengthMeasure | null
    {
        if ( this.EdgeRadius_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field EdgeRadius due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field EdgeRadius' );
                }

                this.EdgeRadius_ = null;                
            }
            else
            {
                this.EdgeRadius_ = value;
            }
        }

        return this.EdgeRadius_ as IfcPositiveLengthMeasure | null;
    }


    public get LegSlope() : IfcPlaneAngleMeasure | null
    {
        if ( this.LegSlope_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LegSlope due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field LegSlope' );
                }

                this.LegSlope_ = null;                
            }
            else
            {
                this.LegSlope_ = value;
            }
        }

        return this.LegSlope_ as IfcPlaneAngleMeasure | null;
    }


    public get CentreOfGravityInX() : IfcPositiveLengthMeasure | null
    {
        if ( this.CentreOfGravityInX_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CentreOfGravityInX due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field CentreOfGravityInX' );
                }

                this.CentreOfGravityInX_ = null;                
            }
            else
            {
                this.CentreOfGravityInX_ = value;
            }
        }

        return this.CentreOfGravityInX_ as IfcPositiveLengthMeasure | null;
    }


    public get CentreOfGravityInY() : IfcPositiveLengthMeasure | null
    {
        if ( this.CentreOfGravityInY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CentreOfGravityInY due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field CentreOfGravityInY' );
                }

                this.CentreOfGravityInY_ = null;                
            }
            else
            {
                this.CentreOfGravityInY_ = value;
            }
        }

        return this.CentreOfGravityInY_ as IfcPositiveLengthMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
