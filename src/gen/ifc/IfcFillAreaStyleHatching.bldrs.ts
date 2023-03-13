
import { IfcGeometricRepresentationItem } from "./index"
import { IfcCurveStyle } from "./index"
import { IfcOneDirectionRepeatFactor } from "./index"
import { IfcPositiveLengthMeasure } from "./index"
import { IfcCartesianPoint } from "./index"
import { IfcPlaneAngleMeasure } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcfillareastylehatching.htm */
export  class IfcFillAreaStyleHatching extends IfcGeometricRepresentationItem 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCFILLAREASTYLEHATCHING;
    }

    private HatchLineAppearance_? : IfcCurveStyle;
    private StartOfNextHatchLine_? : IfcOneDirectionRepeatFactor|IfcPositiveLengthMeasure;
    private PointOfReferenceHatchLine_? : IfcCartesianPoint | null;
    private PatternStart_? : IfcCartesianPoint | null;
    private HatchLineAngle_? : IfcPlaneAngleMeasure;

    public get HatchLineAppearance() : IfcCurveStyle
    {
        if ( this.HatchLineAppearance_ === void 0 )
        {
            this.HatchLineAppearance_ = (() => { this.guaranteeVTable();

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

            if ( !( value instanceof IfcCurveStyle ) )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field' );
            };

            return value; })();
        }

        return this.HatchLineAppearance_ as IfcCurveStyle;
    }

    public get StartOfNextHatchLine() : IfcOneDirectionRepeatFactor|IfcPositiveLengthMeasure
    {
        if ( this.StartOfNextHatchLine_ === void 0 )
        {
            this.StartOfNextHatchLine_ = (() => { this.guaranteeVTable();

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
        
                    if ( !( value instanceof IfcOneDirectionRepeatFactor ) )
                    {                
                        return (void 0);
                    };
        
                    return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )();

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.StartOfNextHatchLine_ as IfcOneDirectionRepeatFactor|IfcPositiveLengthMeasure;
    }

    public get PointOfReferenceHatchLine() : IfcCartesianPoint | null
    {
        if ( this.PointOfReferenceHatchLine_ === void 0 )
        {
            this.PointOfReferenceHatchLine_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let expressID = stepExtractReference( buffer, cursor, endCursor );
            let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           

            if ( !( value instanceof IfcCartesianPoint ) )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field' );
                }

                return null;                
            }
            else
            {
                return value;
            } })();
        }

        return this.PointOfReferenceHatchLine_ as IfcCartesianPoint | null;
    }

    public get PatternStart() : IfcCartesianPoint | null
    {
        if ( this.PatternStart_ === void 0 )
        {
            this.PatternStart_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let expressID = stepExtractReference( buffer, cursor, endCursor );
            let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           

            if ( !( value instanceof IfcCartesianPoint ) )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field' );
                }

                return null;                
            }
            else
            {
                return value;
            } })();
        }

        return this.PatternStart_ as IfcCartesianPoint | null;
    }

    public get HatchLineAngle() : IfcPlaneAngleMeasure
    {
        if ( this.HatchLineAngle_ === void 0 )
        {
            this.HatchLineAngle_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

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

        return this.HatchLineAngle_ as IfcPlaneAngleMeasure;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
