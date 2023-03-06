import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcDirection from "./IfcDirection.bldrs"
import IfcReal from "./IfcReal.bldrs"
import IfcPositivePlaneAngleMeasure from "./IfcPositivePlaneAngleMeasure.bldrs"
import IfcLightSourcePositional from "./IfcLightSourcePositional.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifclightsourcespot.htm */
export default  class IfcLightSourceSpot extends IfcLightSourcePositional 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCLIGHTSOURCESPOT;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Orientation_? : IfcDirection;
    private ConcentrationExponent_? : IfcReal | null;
    private SpreadAngle_? : IfcPositivePlaneAngleMeasure;
    private BeamWidthAngle_? : IfcPositivePlaneAngleMeasure;


    public get Orientation() : IfcDirection
    {
        if ( this.Orientation_ === void 0 )
        {
            
        }

        return this.Orientation_ as IfcDirection;
    }


    public get ConcentrationExponent() : IfcReal | null
    {
        if ( this.ConcentrationExponent_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ConcentrationExponent due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 10;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field ConcentrationExponent' );
                }

                this.ConcentrationExponent_ = null;                
            }
            else
            {
                this.ConcentrationExponent_ = value;
            }
        }

        return this.ConcentrationExponent_ as IfcReal | null;
    }


    public get SpreadAngle() : IfcPositivePlaneAngleMeasure
    {
        if ( this.SpreadAngle_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 11 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field SpreadAngle due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 11;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field SpreadAngle' );
            };

            this.SpreadAngle_ = value;
        }

        return this.SpreadAngle_ as IfcPositivePlaneAngleMeasure;
    }


    public get BeamWidthAngle() : IfcPositivePlaneAngleMeasure
    {
        if ( this.BeamWidthAngle_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 12 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field BeamWidthAngle due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 12;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field BeamWidthAngle' );
            };

            this.BeamWidthAngle_ = value;
        }

        return this.BeamWidthAngle_ as IfcPositivePlaneAngleMeasure;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
