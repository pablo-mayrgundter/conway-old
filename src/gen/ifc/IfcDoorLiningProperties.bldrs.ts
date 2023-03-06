import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcShapeAspect from "./IfcShapeAspect.bldrs"
import IfcPropertySetDefinition from "./IfcPropertySetDefinition.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcdoorliningproperties.htm */
export default  class IfcDoorLiningProperties extends IfcPropertySetDefinition 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCDOORLININGPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private LiningDepth_? : IfcPositiveLengthMeasure | null;
    private LiningThickness_? : IfcPositiveLengthMeasure | null;
    private ThresholdDepth_? : IfcPositiveLengthMeasure | null;
    private ThresholdThickness_? : IfcPositiveLengthMeasure | null;
    private TransomThickness_? : IfcPositiveLengthMeasure | null;
    private TransomOffset_? : IfcLengthMeasure | null;
    private LiningOffset_? : IfcLengthMeasure | null;
    private ThresholdOffset_? : IfcLengthMeasure | null;
    private CasingThickness_? : IfcPositiveLengthMeasure | null;
    private CasingDepth_? : IfcPositiveLengthMeasure | null;
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


    public get ThresholdDepth() : IfcPositiveLengthMeasure | null
    {
        if ( this.ThresholdDepth_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ThresholdDepth due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field ThresholdDepth' );
                }

                this.ThresholdDepth_ = null;                
            }
            else
            {
                this.ThresholdDepth_ = value;
            }
        }

        return this.ThresholdDepth_ as IfcPositiveLengthMeasure | null;
    }


    public get ThresholdThickness() : IfcPositiveLengthMeasure | null
    {
        if ( this.ThresholdThickness_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ThresholdThickness due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field ThresholdThickness' );
                }

                this.ThresholdThickness_ = null;                
            }
            else
            {
                this.ThresholdThickness_ = value;
            }
        }

        return this.ThresholdThickness_ as IfcPositiveLengthMeasure | null;
    }


    public get TransomThickness() : IfcPositiveLengthMeasure | null
    {
        if ( this.TransomThickness_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TransomThickness due to too few fields in record" ); 
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


    public get TransomOffset() : IfcLengthMeasure | null
    {
        if ( this.TransomOffset_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TransomOffset due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field TransomOffset' );
                }

                this.TransomOffset_ = null;                
            }
            else
            {
                this.TransomOffset_ = value;
            }
        }

        return this.TransomOffset_ as IfcLengthMeasure | null;
    }


    public get LiningOffset() : IfcLengthMeasure | null
    {
        if ( this.LiningOffset_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LiningOffset due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field LiningOffset' );
                }

                this.LiningOffset_ = null;                
            }
            else
            {
                this.LiningOffset_ = value;
            }
        }

        return this.LiningOffset_ as IfcLengthMeasure | null;
    }


    public get ThresholdOffset() : IfcLengthMeasure | null
    {
        if ( this.ThresholdOffset_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 11 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ThresholdOffset due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field ThresholdOffset' );
                }

                this.ThresholdOffset_ = null;                
            }
            else
            {
                this.ThresholdOffset_ = value;
            }
        }

        return this.ThresholdOffset_ as IfcLengthMeasure | null;
    }


    public get CasingThickness() : IfcPositiveLengthMeasure | null
    {
        if ( this.CasingThickness_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 12 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CasingThickness due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field CasingThickness' );
                }

                this.CasingThickness_ = null;                
            }
            else
            {
                this.CasingThickness_ = value;
            }
        }

        return this.CasingThickness_ as IfcPositiveLengthMeasure | null;
    }


    public get CasingDepth() : IfcPositiveLengthMeasure | null
    {
        if ( this.CasingDepth_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 13 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CasingDepth due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 13;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field CasingDepth' );
                }

                this.CasingDepth_ = null;                
            }
            else
            {
                this.CasingDepth_ = value;
            }
        }

        return this.CasingDepth_ as IfcPositiveLengthMeasure | null;
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
