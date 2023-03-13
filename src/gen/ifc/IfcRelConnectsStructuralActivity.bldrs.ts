
import { IfcRelConnects } from "./index"
import { IfcStructuralItem } from "./index"
import { IfcElement } from "./index"
import { IfcStructuralActivity } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcrelconnectsstructuralactivity.htm */
export  class IfcRelConnectsStructuralActivity extends IfcRelConnects 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCRELCONNECTSSTRUCTURALACTIVITY;
    }

    private RelatingElement_? : IfcStructuralItem|IfcElement;
    private RelatedStructuralActivity_? : IfcStructuralActivity;

    public get RelatingElement() : IfcStructuralItem|IfcElement
    {
        if ( this.RelatingElement_ === void 0 )
        {
            this.RelatingElement_ = (() => { this.guaranteeVTable();

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
                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
        
                    if ( !( value instanceof IfcStructuralItem ) )
                    {                
                        return (void 0);
                    };
        
                    return value; } )() ??
( () => { 
                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
        
                    if ( !( value instanceof IfcElement ) )
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

        return this.RelatingElement_ as IfcStructuralItem|IfcElement;
    }

    public get RelatedStructuralActivity() : IfcStructuralActivity
    {
        if ( this.RelatedStructuralActivity_ === void 0 )
        {
            this.RelatedStructuralActivity_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let expressID = stepExtractReference( buffer, cursor, endCursor );
            let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           

            if ( !( value instanceof IfcStructuralActivity ) )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field' );
            };

            return value; })();
        }

        return this.RelatedStructuralActivity_ as IfcStructuralActivity;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
