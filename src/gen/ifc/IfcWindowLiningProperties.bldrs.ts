import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcShapeAspect from "./IfcShapeAspect.bldrs"
import IfcPropertySetDefinition from "./IfcPropertySetDefinition.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcwindowliningproperties.htm */
export default  class IfcWindowLiningProperties extends IfcPropertySetDefinition 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCWINDOWLININGPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private LiningDepth_? : IfcPositiveLengthMeasure | null;
    private LiningThickness_? : IfcPositiveLengthMeasure | null;
    private TransomThickness_? : IfcPositiveLengthMeasure | null;
    private MullionThickness_? : IfcPositiveLengthMeasure | null;
    private FirstTransomOffset_? : IfcNormalisedRatioMeasure | null;
    private SecondTransomOffset_? : IfcNormalisedRatioMeasure | null;
    private FirstMullionOffset_? : IfcNormalisedRatioMeasure | null;
    private SecondMullionOffset_? : IfcNormalisedRatioMeasure | null;
    private ShapeAspectStyle_? : IfcShapeAspect | null;


    public get LiningDepth() : IfcPositiveLengthMeasure | null
    {
        if ( this.LiningDepth_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LiningDepth due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field LiningDepth' );
                }

                this.LiningDepth_ = null;                
            }
            else
            {
                this.LiningDepth_ = value;
            }
        }

        return this.LiningDepth_ as IfcPositiveLengthMeasure | null;
    }


    public get LiningThickness() : IfcPositiveLengthMeasure | null
    {
        if ( this.LiningThickness_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LiningThickness due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field LiningThickness' );
                }

                this.LiningThickness_ = null;                
            }
            else
            {
                this.LiningThickness_ = value;
            }
        }

        return this.LiningThickness_ as IfcPositiveLengthMeasure | null;
    }


    public get TransomThickness() : IfcPositiveLengthMeasure | null
    {
        if ( this.TransomThickness_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TransomThickness due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field TransomThickness' );
                }

                this.TransomThickness_ = null;                
            }
            else
            {
                this.TransomThickness_ = value;
            }
        }

        return this.TransomThickness_ as IfcPositiveLengthMeasure | null;
    }


    public get MullionThickness() : IfcPositiveLengthMeasure | null
    {
        if ( this.MullionThickness_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MullionThickness due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field MullionThickness' );
                }

                this.MullionThickness_ = null;                
            }
            else
            {
                this.MullionThickness_ = value;
            }
        }

        return this.MullionThickness_ as IfcPositiveLengthMeasure | null;
    }


    public get FirstTransomOffset() : IfcNormalisedRatioMeasure | null
    {
        if ( this.FirstTransomOffset_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FirstTransomOffset due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field FirstTransomOffset' );
                }

                this.FirstTransomOffset_ = null;                
            }
            else
            {
                this.FirstTransomOffset_ = value;
            }
        }

        return this.FirstTransomOffset_ as IfcNormalisedRatioMeasure | null;
    }


    public get SecondTransomOffset() : IfcNormalisedRatioMeasure | null
    {
        if ( this.SecondTransomOffset_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SecondTransomOffset due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field SecondTransomOffset' );
                }

                this.SecondTransomOffset_ = null;                
            }
            else
            {
                this.SecondTransomOffset_ = value;
            }
        }

        return this.SecondTransomOffset_ as IfcNormalisedRatioMeasure | null;
    }


    public get FirstMullionOffset() : IfcNormalisedRatioMeasure | null
    {
        if ( this.FirstMullionOffset_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FirstMullionOffset due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field FirstMullionOffset' );
                }

                this.FirstMullionOffset_ = null;                
            }
            else
            {
                this.FirstMullionOffset_ = value;
            }
        }

        return this.FirstMullionOffset_ as IfcNormalisedRatioMeasure | null;
    }


    public get SecondMullionOffset() : IfcNormalisedRatioMeasure | null
    {
        if ( this.SecondMullionOffset_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 11 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SecondMullionOffset due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field SecondMullionOffset' );
                }

                this.SecondMullionOffset_ = null;                
            }
            else
            {
                this.SecondMullionOffset_ = value;
            }
        }

        return this.SecondMullionOffset_ as IfcNormalisedRatioMeasure | null;
    }


    public get ShapeAspectStyle() : IfcShapeAspect | null
    {
        if ( this.ShapeAspectStyle_ === void 0 )
        {
            
        }

        return this.ShapeAspectStyle_ as IfcShapeAspect | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
