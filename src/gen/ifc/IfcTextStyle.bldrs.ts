
import { IfcPresentationStyle } from "./index"
import { IfcTextStyleForDefinedFont } from "./index"
import { IfcTextStyleWithBoxCharacteristics } from "./index"
import { IfcTextStyleTextModel } from "./index"
import { IfcPreDefinedTextFont } from "./index"
import { IfcExternallyDefinedTextFont } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctextstyle.htm */
export  class IfcTextStyle extends IfcPresentationStyle 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTEXTSTYLE;
    }

    private TextCharacterAppearance_? : IfcTextStyleForDefinedFont | null;
    private TextStyle_? : IfcTextStyleWithBoxCharacteristics|IfcTextStyleTextModel | null;
    private TextFontStyle_? : IfcPreDefinedTextFont|IfcExternallyDefinedTextFont;

    public get TextCharacterAppearance() : IfcTextStyleForDefinedFont | null
    {
        if ( this.TextCharacterAppearance_ === void 0 )
        {
            this.TextCharacterAppearance_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = ( () => { 
                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
        
                    if ( !( value instanceof IfcTextStyleForDefinedFont ) )
                    {                
                        return (void 0);
                    };
        
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

        return this.TextCharacterAppearance_ as IfcTextStyleForDefinedFont | null;
    }

    public get TextStyle() : IfcTextStyleWithBoxCharacteristics|IfcTextStyleTextModel | null
    {
        if ( this.TextStyle_ === void 0 )
        {
            this.TextStyle_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = ( () => { 
                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
        
                    if ( !( value instanceof IfcTextStyleWithBoxCharacteristics ) )
                    {                
                        return (void 0);
                    };
        
                    return value; } )() ??
( () => { 
                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
        
                    if ( !( value instanceof IfcTextStyleTextModel ) )
                    {                
                        return (void 0);
                    };
        
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

        return this.TextStyle_ as IfcTextStyleWithBoxCharacteristics|IfcTextStyleTextModel | null;
    }

    public get TextFontStyle() : IfcPreDefinedTextFont|IfcExternallyDefinedTextFont
    {
        if ( this.TextFontStyle_ === void 0 )
        {
            this.TextFontStyle_ = (() => { this.guaranteeVTable();

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
                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
        
                    if ( !( value instanceof IfcPreDefinedTextFont ) )
                    {                
                        return (void 0);
                    };
        
                    return value; } )() ??
( () => { 
                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
        
                    if ( !( value instanceof IfcExternallyDefinedTextFont ) )
                    {                
                        return (void 0);
                    };
        
                    return value; } )();

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.TextFontStyle_ as IfcPreDefinedTextFont|IfcExternallyDefinedTextFont;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
