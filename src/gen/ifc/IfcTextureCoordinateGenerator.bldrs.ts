
import { IfcTextureCoordinate } from "./index"
import { IfcLabel } from "./index"
import { IfcInteger } from "./index"
import { IfcReal } from "./index"
import { IfcBoolean } from "./index"
import { IfcIdentifier } from "./index"
import { IfcText } from "./index"
import { IfcLogical } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifctexturecoordinategenerator.htm */
export  class IfcTextureCoordinateGenerator extends IfcTextureCoordinate 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCTEXTURECOORDINATEGENERATOR;
    }

    private Mode_? : IfcLabel;
    private Parameter_? : Array<IfcInteger|IfcReal|IfcBoolean|IfcIdentifier|IfcText|IfcLabel|IfcLogical>;

    public get Mode() : IfcLabel
    {
        if ( this.Mode_ === void 0 )
        {
            this.Mode_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.Mode_ as IfcLabel;
    }

    public get Parameter() : Array<IfcInteger|IfcReal|IfcBoolean|IfcIdentifier|IfcText|IfcLabel|IfcLogical>
    {
        if ( this.Parameter_ === void 0 )
        {
            this.Parameter_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value : Array<IfcInteger|IfcReal|IfcBoolean|IfcIdentifier|IfcText|IfcLabel|IfcLogical> = [];

            for ( let address of stepExtractArray( buffer, cursor, endCursor ) )
            {
                value.push( (() => { 
                    let cursor = address;
        
                    let value = ( () => { 
                                    let value = stepExtractNumber( buffer, cursor, endCursor );
                        
                        return value; } )() ??
        ( () => { 
                                    let value = stepExtractNumber( buffer, cursor, endCursor );
                        
                        return value; } )() ??
        ( () => { 
                                    let value = stepExtractBoolean( buffer, cursor, endCursor );
                        
                        return value; } )() ??
        ( () => { 
                                    let value = stepExtractString( buffer, cursor, endCursor );
                        
                        return value; } )() ??
        ( () => { 
                                    let value = stepExtractString( buffer, cursor, endCursor );
                        
                        return value; } )() ??
        ( () => { 
                                    let value = stepExtractString( buffer, cursor, endCursor );
                        
                        return value; } )() ??
        ( () => { 
                                    let value = stepExtractBoolean( buffer, cursor, endCursor );
                        
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

        return this.Parameter_ as Array<IfcInteger|IfcReal|IfcBoolean|IfcIdentifier|IfcText|IfcLabel|IfcLogical>;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
