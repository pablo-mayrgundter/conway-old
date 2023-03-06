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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctshapeprofiledef.htm */
export default  class IfcTShapeProfileDef extends IfcParameterizedProfileDef 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTSHAPEPROFILEDEF;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Depth_? : IfcPositiveLengthMeasure;
    private FlangeWidth_? : IfcPositiveLengthMeasure;
    private WebThickness_? : IfcPositiveLengthMeasure;
    private FlangeThickness_? : IfcPositiveLengthMeasure;
    private FilletRadius_? : IfcPositiveLengthMeasure | null;
    private FlangeEdgeRadius_? : IfcPositiveLengthMeasure | null;
    private WebEdgeRadius_? : IfcPositiveLengthMeasure | null;
    private WebSlope_? : IfcPlaneAngleMeasure | null;
    private FlangeSlope_? : IfcPlaneAngleMeasure | null;
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


    public get FlangeWidth() : IfcPositiveLengthMeasure
    {
        if ( this.FlangeWidth_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FlangeWidth due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field FlangeWidth' );
            };

            this.FlangeWidth_ = value;
        }

        return this.FlangeWidth_ as IfcPositiveLengthMeasure;
    }


    public get WebThickness() : IfcPositiveLengthMeasure
    {
        if ( this.WebThickness_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field WebThickness due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field WebThickness' );
            };

            this.WebThickness_ = value;
        }

        return this.WebThickness_ as IfcPositiveLengthMeasure;
    }


    public get FlangeThickness() : IfcPositiveLengthMeasure
    {
        if ( this.FlangeThickness_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FlangeThickness due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field FlangeThickness' );
            };

            this.FlangeThickness_ = value;
        }

        return this.FlangeThickness_ as IfcPositiveLengthMeasure;
    }


    public get FilletRadius() : IfcPositiveLengthMeasure | null
    {
        if ( this.FilletRadius_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FilletRadius due to too few fields in record" ); 
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


    public get FlangeEdgeRadius() : IfcPositiveLengthMeasure | null
    {
        if ( this.FlangeEdgeRadius_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FlangeEdgeRadius due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field FlangeEdgeRadius' );
                }

                this.FlangeEdgeRadius_ = null;                
            }
            else
            {
                this.FlangeEdgeRadius_ = value;
            }
        }

        return this.FlangeEdgeRadius_ as IfcPositiveLengthMeasure | null;
    }


    public get WebEdgeRadius() : IfcPositiveLengthMeasure | null
    {
        if ( this.WebEdgeRadius_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field WebEdgeRadius due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field WebEdgeRadius' );
                }

                this.WebEdgeRadius_ = null;                
            }
            else
            {
                this.WebEdgeRadius_ = value;
            }
        }

        return this.WebEdgeRadius_ as IfcPositiveLengthMeasure | null;
    }


    public get WebSlope() : IfcPlaneAngleMeasure | null
    {
        if ( this.WebSlope_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field WebSlope due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field WebSlope' );
                }

                this.WebSlope_ = null;                
            }
            else
            {
                this.WebSlope_ = value;
            }
        }

        return this.WebSlope_ as IfcPlaneAngleMeasure | null;
    }


    public get FlangeSlope() : IfcPlaneAngleMeasure | null
    {
        if ( this.FlangeSlope_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 11 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FlangeSlope due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field FlangeSlope' );
                }

                this.FlangeSlope_ = null;                
            }
            else
            {
                this.FlangeSlope_ = value;
            }
        }

        return this.FlangeSlope_ as IfcPlaneAngleMeasure | null;
    }


    public get CentreOfGravityInY() : IfcPositiveLengthMeasure | null
    {
        if ( this.CentreOfGravityInY_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 12 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CentreOfGravityInY due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 12;

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
