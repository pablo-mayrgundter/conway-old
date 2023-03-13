
import { IfcDerivedUnit } from "./index"
import { IfcNamedUnit } from "./index"
import { IfcMonetaryUnit } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcunitassignment.htm */
export  class IfcUnitAssignment extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCUNITASSIGNMENT;
    }

    private Units_? : Array<IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit>;

    public get Units() : Array<IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit>
    {
        if ( this.Units_ === void 0 )
        {
            this.Units_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value : Array<IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit> = [];

            for ( let address of stepExtractArray( buffer, cursor, endCursor ) )
            {
                value.push( (() => { 
                    let cursor = address;
        
                    let value = ( () => { 
                                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
                        
                                    if ( !( value instanceof IfcDerivedUnit ) )
                                    {                
                                        return (void 0);
                                    };
                        
                                    return value; } )() ??
        ( () => { 
                                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
                        
                                    if ( !( value instanceof IfcNamedUnit ) )
                                    {                
                                        return (void 0);
                                    };
                        
                                    return value; } )() ??
        ( () => { 
                                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
                        
                                    if ( !( value instanceof IfcMonetaryUnit ) )
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

        return this.Units_ as Array<IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit>;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
