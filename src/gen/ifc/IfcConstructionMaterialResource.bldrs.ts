
import { IfcConstructionResource } from "./index"
import { IfcOrganization } from "./index"
import { IfcPerson } from "./index"
import { IfcPersonAndOrganization } from "./index"
import { IfcRatioMeasure } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcconstructionmaterialresource.htm */
export  class IfcConstructionMaterialResource extends IfcConstructionResource 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCCONSTRUCTIONMATERIALRESOURCE;
    }

    private Suppliers_? : Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization> | null;
    private UsageRatio_? : IfcRatioMeasure | null;

    public get Suppliers() : Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization> | null
    {
        if ( this.Suppliers_ === void 0 )
        {
            this.Suppliers_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 9;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value : Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization> = [];

            for ( let address of stepExtractArray( buffer, cursor, endCursor ) )
            {
                value.push( (() => { 
                    let cursor = address;
        
                    let value = ( () => { 
                                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
                        
                                    if ( !( value instanceof IfcOrganization ) )
                                    {                
                                        return (void 0);
                                    };
                        
                                    return value; } )() ??
        ( () => { 
                                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
                        
                                    if ( !( value instanceof IfcPerson ) )
                                    {                
                                        return (void 0);
                                    };
                        
                                    return value; } )() ??
        ( () => { 
                                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
                        
                                    if ( !( value instanceof IfcPersonAndOrganization ) )
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

        return this.Suppliers_ as Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization> | null;
    }

    public get UsageRatio() : IfcRatioMeasure | null
    {
        if ( this.UsageRatio_ === void 0 )
        {
            this.UsageRatio_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 10;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

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

        return this.UsageRatio_ as IfcRatioMeasure | null;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
