
import { IfcPlaneAngleMeasure } from "./index"
import { IfcLuminousIntensityDistributionMeasure } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifclightdistributiondata.htm */
export  class IfcLightDistributionData extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCLIGHTDISTRIBUTIONDATA;
    }

    private MainPlaneAngle_? : IfcPlaneAngleMeasure;
    private SecondaryPlaneAngle_? : Array<IfcPlaneAngleMeasure>;
    private LuminousIntensity_? : Array<IfcLuminousIntensityDistributionMeasure>;

    public get MainPlaneAngle() : IfcPlaneAngleMeasure
    {
        if ( this.MainPlaneAngle_ === void 0 )
        {
            this.MainPlaneAngle_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

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

        return this.MainPlaneAngle_ as IfcPlaneAngleMeasure;
    }

    public get SecondaryPlaneAngle() : Array<IfcPlaneAngleMeasure>
    {
        if ( this.SecondaryPlaneAngle_ === void 0 )
        {
            this.SecondaryPlaneAngle_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value : Array<IfcPlaneAngleMeasure> = [];

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

        return this.SecondaryPlaneAngle_ as Array<IfcPlaneAngleMeasure>;
    }

    public get LuminousIntensity() : Array<IfcLuminousIntensityDistributionMeasure>
    {
        if ( this.LuminousIntensity_ === void 0 )
        {
            this.LuminousIntensity_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value : Array<IfcLuminousIntensityDistributionMeasure> = [];

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

        return this.LuminousIntensity_ as Array<IfcLuminousIntensityDistributionMeasure>;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
