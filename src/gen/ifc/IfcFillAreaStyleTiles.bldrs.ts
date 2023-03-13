
import { IfcGeometricRepresentationItem } from "./index"
import { IfcOneDirectionRepeatFactor } from "./index"
import { IfcFillAreaStyleTileSymbolWithStyle } from "./index"
import { IfcPositiveRatioMeasure } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcfillareastyletiles.htm */
export  class IfcFillAreaStyleTiles extends IfcGeometricRepresentationItem 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCFILLAREASTYLETILES;
    }

    private TilingPattern_? : IfcOneDirectionRepeatFactor;
    private Tiles_? : Array<IfcFillAreaStyleTileSymbolWithStyle>;
    private TilingScale_? : IfcPositiveRatioMeasure;

    public get TilingPattern() : IfcOneDirectionRepeatFactor
    {
        if ( this.TilingPattern_ === void 0 )
        {
            this.TilingPattern_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let expressID = stepExtractReference( buffer, cursor, endCursor );
            let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           

            if ( !( value instanceof IfcOneDirectionRepeatFactor ) )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field' );
            };

            return value; })();
        }

        return this.TilingPattern_ as IfcOneDirectionRepeatFactor;
    }

    public get Tiles() : Array<IfcFillAreaStyleTileSymbolWithStyle>
    {
        if ( this.Tiles_ === void 0 )
        {
            this.Tiles_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value : Array<IfcFillAreaStyleTileSymbolWithStyle> = [];

            for ( let address of stepExtractArray( buffer, cursor, endCursor ) )
            {
                value.push( (() => { 
                    let cursor = address;
        
                    let value = ( () => { 
                                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
                        
                                    if ( !( value instanceof IfcFillAreaStyleTileSymbolWithStyle ) )
                                    {                
                                        return (void 0);
                                    };
                        
                                    return value; } )();
        
                    if ( value === void 0 )
                    {                
                        throw new Error( 'Value in STEP was incorrectly typed' );
                    };
        
                    return value;
                })() );
            }

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.Tiles_ as Array<IfcFillAreaStyleTileSymbolWithStyle>;
    }

    public get TilingScale() : IfcPositiveRatioMeasure
    {
        if ( this.TilingScale_ === void 0 )
        {
            this.TilingScale_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.TilingScale_ as IfcPositiveRatioMeasure;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
