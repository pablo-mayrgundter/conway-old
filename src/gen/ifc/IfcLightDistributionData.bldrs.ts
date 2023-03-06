import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPlaneAngleMeasure from "./IfcPlaneAngleMeasure.bldrs"
import IfcLuminousIntensityDistributionMeasure from "./IfcLuminousIntensityDistributionMeasure.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifclightdistributiondata.htm */
export default  class IfcLightDistributionData extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCLIGHTDISTRIBUTIONDATA;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private MainPlaneAngle_? : IfcPlaneAngleMeasure;
    private SecondaryPlaneAngle_? : Array<IfcPlaneAngleMeasure>;
    private LuminousIntensity_? : Array<IfcLuminousIntensityDistributionMeasure>;


    public get MainPlaneAngle() : IfcPlaneAngleMeasure
    {
        if ( this.MainPlaneAngle_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MainPlaneAngle due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field MainPlaneAngle' );
            };

            this.MainPlaneAngle_ = value;
        }

        return this.MainPlaneAngle_ as IfcPlaneAngleMeasure;
    }


    public get SecondaryPlaneAngle() : Array<IfcPlaneAngleMeasure>
    {
        if ( this.SecondaryPlaneAngle_ === void 0 )
        {
            
        }

        return this.SecondaryPlaneAngle_ as Array<IfcPlaneAngleMeasure>;
    }


    public get LuminousIntensity() : Array<IfcLuminousIntensityDistributionMeasure>
    {
        if ( this.LuminousIntensity_ === void 0 )
        {
            
        }

        return this.LuminousIntensity_ as Array<IfcLuminousIntensityDistributionMeasure>;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
