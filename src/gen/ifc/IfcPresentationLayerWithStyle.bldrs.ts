import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcNullStyle, { IfcNullStyleDeserializeStep } from "./IfcNullStyle.bldrs"
import IfcCurveStyle from "./IfcCurveStyle.bldrs"
import IfcSymbolStyle from "./IfcSymbolStyle.bldrs"
import IfcFillAreaStyle from "./IfcFillAreaStyle.bldrs"
import IfcTextStyle from "./IfcTextStyle.bldrs"
import IfcSurfaceStyle from "./IfcSurfaceStyle.bldrs"
import IfcPresentationLayerAssignment from "./IfcPresentationLayerAssignment.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpresentationlayerwithstyle.htm */
export default  class IfcPresentationLayerWithStyle extends IfcPresentationLayerAssignment 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPRESENTATIONLAYERWITHSTYLE;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private LayerOn_? : boolean;
    private LayerFrozen_? : boolean;
    private LayerBlocked_? : boolean;
    private LayerStyles_? : Array<IfcNullStyle|IfcCurveStyle|IfcSymbolStyle|IfcFillAreaStyle|IfcTextStyle|IfcSurfaceStyle>;

    public get LayerOn() : boolean
    {
        if ( this.LayerOn_ === void 0 )
        {
            this.LayerOn_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractBoolean( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.LayerOn_ as boolean;
    }

    public get LayerFrozen() : boolean
    {
        if ( this.LayerFrozen_ === void 0 )
        {
            this.LayerFrozen_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractBoolean( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.LayerFrozen_ as boolean;
    }

    public get LayerBlocked() : boolean
    {
        if ( this.LayerBlocked_ === void 0 )
        {
            this.LayerBlocked_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractBoolean( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.LayerBlocked_ as boolean;
    }

    public get LayerStyles() : Array<IfcNullStyle|IfcCurveStyle|IfcSymbolStyle|IfcFillAreaStyle|IfcTextStyle|IfcSurfaceStyle>
    {
        if ( this.LayerStyles_ === void 0 )
        {
            this.LayerStyles_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value : Array<IfcNullStyle|IfcCurveStyle|IfcSymbolStyle|IfcFillAreaStyle|IfcTextStyle|IfcSurfaceStyle> = [];

            for ( let address of stepExtractArray( buffer, cursor, endCursor ) )
            {
                value.push( (() => { 
                    let cursor = address;
        
                    let value = ( () => { try { 
                                    let value = IfcNullStyleDeserializeStep( buffer, cursor, endCursor );
                        
                                    if ( value === void 0 )
                                    {                
                                        throw new Error( 'Value in STEP was incorrectly typed' );
                                    };
                        
                                    return value; } catch( e ) { return; } } )() ?? ( () => { try { 
                                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
                        
                                    if ( value === void 0 || !( value instanceof IfcCurveStyle ) )
                                    {                
                                        throw new Error( 'Value in STEP was incorrectly typed for field' );
                                    };
                        
                                    return value; } catch( e ) { return; } } )() ?? ( () => { try { 
                                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
                        
                                    if ( value === void 0 || !( value instanceof IfcSymbolStyle ) )
                                    {                
                                        throw new Error( 'Value in STEP was incorrectly typed for field' );
                                    };
                        
                                    return value; } catch( e ) { return; } } )() ?? ( () => { try { 
                                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
                        
                                    if ( value === void 0 || !( value instanceof IfcFillAreaStyle ) )
                                    {                
                                        throw new Error( 'Value in STEP was incorrectly typed for field' );
                                    };
                        
                                    return value; } catch( e ) { return; } } )() ?? ( () => { try { 
                                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
                        
                                    if ( value === void 0 || !( value instanceof IfcTextStyle ) )
                                    {                
                                        throw new Error( 'Value in STEP was incorrectly typed for field' );
                                    };
                        
                                    return value; } catch( e ) { return; } } )() ?? ( () => { try { 
                                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
                        
                                    if ( value === void 0 || !( value instanceof IfcSurfaceStyle ) )
                                    {                
                                        throw new Error( 'Value in STEP was incorrectly typed for field' );
                                    };
                        
                                    return value; } catch( e ) { return; } } )();
        
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

        return this.LayerStyles_ as Array<IfcNullStyle|IfcCurveStyle|IfcSymbolStyle|IfcFillAreaStyle|IfcTextStyle|IfcSurfaceStyle>;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
