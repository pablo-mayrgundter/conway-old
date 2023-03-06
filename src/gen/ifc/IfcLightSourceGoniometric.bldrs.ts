import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcColourRgb from "./IfcColourRgb.bldrs"
import IfcThermodynamicTemperatureMeasure from "./IfcThermodynamicTemperatureMeasure.bldrs"
import IfcLuminousFluxMeasure from "./IfcLuminousFluxMeasure.bldrs"
import IfcLightEmissionSourceEnum, { IfcLightEmissionSourceEnumDeserializeStep } from "./IfcLightEmissionSourceEnum.bldrs"
import IfcExternalReference from "./IfcExternalReference.bldrs"
import IfcLightIntensityDistribution from "./IfcLightIntensityDistribution.bldrs"
import IfcLightSource from "./IfcLightSource.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifclightsourcegoniometric.htm */
export default  class IfcLightSourceGoniometric extends IfcLightSource 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCLIGHTSOURCEGONIOMETRIC;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private Position_? : IfcAxis2Placement3D;
    private ColourAppearance_? : IfcColourRgb | null;
    private ColourTemperature_? : IfcThermodynamicTemperatureMeasure;
    private LuminousFlux_? : IfcLuminousFluxMeasure;
    private LightEmissionSource_? : IfcLightEmissionSourceEnum;
    private LightDistributionDataSource_? : IfcExternalReference|IfcLightIntensityDistribution;


    public get Position() : IfcAxis2Placement3D
    {
        if ( this.Position_ === void 0 )
        {
            
        }

        return this.Position_ as IfcAxis2Placement3D;
    }


    public get ColourAppearance() : IfcColourRgb | null
    {
        if ( this.ColourAppearance_ === void 0 )
        {
            
        }

        return this.ColourAppearance_ as IfcColourRgb | null;
    }


    public get ColourTemperature() : IfcThermodynamicTemperatureMeasure
    {
        if ( this.ColourTemperature_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ColourTemperature due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field ColourTemperature' );
            };

            this.ColourTemperature_ = value;
        }

        return this.ColourTemperature_ as IfcThermodynamicTemperatureMeasure;
    }


    public get LuminousFlux() : IfcLuminousFluxMeasure
    {
        if ( this.LuminousFlux_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LuminousFlux due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field LuminousFlux' );
            };

            this.LuminousFlux_ = value;
        }

        return this.LuminousFlux_ as IfcLuminousFluxMeasure;
    }


    public get LightEmissionSource() : IfcLightEmissionSourceEnum
    {
        if ( this.LightEmissionSource_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LightEmissionSource due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcLightEmissionSourceEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field LightEmissionSource' );
            };

            this.LightEmissionSource_ = value;
        }

        return this.LightEmissionSource_ as IfcLightEmissionSourceEnum;
    }


    public get LightDistributionDataSource() : IfcExternalReference|IfcLightIntensityDistribution
    {
        if ( this.LightDistributionDataSource_ === void 0 )
        {
            
        }

        return this.LightDistributionDataSource_ as IfcExternalReference|IfcLightIntensityDistribution;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
