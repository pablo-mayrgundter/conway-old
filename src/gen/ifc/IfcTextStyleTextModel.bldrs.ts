
import { IfcRatioMeasure } from "./index"
import { IfcLengthMeasure } from "./index"
import { IfcDescriptiveMeasure } from "./index"
import { IfcPositiveLengthMeasure } from "./index"
import { IfcNormalisedRatioMeasure } from "./index"
import { IfcPositiveRatioMeasure } from "./index"
import { IfcTextAlignment } from "./index"
import { IfcTextDecoration } from "./index"
import { IfcTextTransformation } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctextstyletextmodel.htm */
export  class IfcTextStyleTextModel extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTEXTSTYLETEXTMODEL;
    }

    private TextIndent_? : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure | null;
    private TextAlign_? : IfcTextAlignment | null;
    private TextDecoration_? : IfcTextDecoration | null;
    private LetterSpacing_? : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure | null;
    private WordSpacing_? : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure | null;
    private TextTransform_? : IfcTextTransformation | null;
    private LineHeight_? : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure | null;

    public get TextIndent() : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure | null
    {
        if ( this.TextIndent_ === void 0 )
        {
            this.TextIndent_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = ( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractString( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )();

            if ( value === void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed' );
                }

                return null;                
            }
            else
            {
                return value;
            } })();
        }

        return this.TextIndent_ as IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure | null;
    }

    public get TextAlign() : IfcTextAlignment | null
    {
        if ( this.TextAlign_ === void 0 )
        {
            this.TextAlign_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed' );
                }

                return null;                
            }
            else
            {
                return value;
            } })();
        }

        return this.TextAlign_ as IfcTextAlignment | null;
    }

    public get TextDecoration() : IfcTextDecoration | null
    {
        if ( this.TextDecoration_ === void 0 )
        {
            this.TextDecoration_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed' );
                }

                return null;                
            }
            else
            {
                return value;
            } })();
        }

        return this.TextDecoration_ as IfcTextDecoration | null;
    }

    public get LetterSpacing() : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure | null
    {
        if ( this.LetterSpacing_ === void 0 )
        {
            this.LetterSpacing_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = ( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractString( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )();

            if ( value === void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed' );
                }

                return null;                
            }
            else
            {
                return value;
            } })();
        }

        return this.LetterSpacing_ as IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure | null;
    }

    public get WordSpacing() : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure | null
    {
        if ( this.WordSpacing_ === void 0 )
        {
            this.WordSpacing_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = ( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractString( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )();

            if ( value === void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed' );
                }

                return null;                
            }
            else
            {
                return value;
            } })();
        }

        return this.WordSpacing_ as IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure | null;
    }

    public get TextTransform() : IfcTextTransformation | null
    {
        if ( this.TextTransform_ === void 0 )
        {
            this.TextTransform_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed' );
                }

                return null;                
            }
            else
            {
                return value;
            } })();
        }

        return this.TextTransform_ as IfcTextTransformation | null;
    }

    public get LineHeight() : IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure | null
    {
        if ( this.LineHeight_ === void 0 )
        {
            this.LineHeight_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = ( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractString( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )();

            if ( value === void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed' );
                }

                return null;                
            }
            else
            {
                return value;
            } })();
        }

        return this.LineHeight_ as IfcRatioMeasure|IfcLengthMeasure|IfcDescriptiveMeasure|IfcPositiveLengthMeasure|IfcNormalisedRatioMeasure|IfcPositiveRatioMeasure | null;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
