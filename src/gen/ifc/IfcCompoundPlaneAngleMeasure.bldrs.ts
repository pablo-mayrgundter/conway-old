

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifccompoundplaneanglemeasure.htm */
export class IfcCompoundPlaneAngleMeasure extends StepEntityBase< EntityTypesIfc >
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCOMPOUNDPLANEANGLEMEASURE;
    }

    private Value_? : Array<number>;

    public get Value() : Array<number>
    {
        if ( this.Value_ === void 0 )
        {
            this.Value_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value : Array<number> = [];

            for ( let address of stepExtractArray( buffer, cursor, endCursor ) )
            {
                value.push( (() => { 
                    let cursor = address;
        
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
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

        return this.Value_ as Array<number>;
    }

    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
