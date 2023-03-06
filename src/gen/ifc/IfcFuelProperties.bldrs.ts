import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcThermodynamicTemperatureMeasure from "./IfcThermodynamicTemperatureMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcHeatingValueMeasure from "./IfcHeatingValueMeasure.bldrs"
import IfcMaterialProperties from "./IfcMaterialProperties.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcfuelproperties.htm */
export default  class IfcFuelProperties extends IfcMaterialProperties 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCFUELPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private CombustionTemperature_? : IfcThermodynamicTemperatureMeasure | null;
    private CarbonContent_? : IfcPositiveRatioMeasure | null;
    private LowerHeatingValue_? : IfcHeatingValueMeasure | null;
    private HigherHeatingValue_? : IfcHeatingValueMeasure | null;


    public get CombustionTemperature() : IfcThermodynamicTemperatureMeasure | null
    {
        if ( this.CombustionTemperature_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CombustionTemperature due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field CombustionTemperature' );
                }

                this.CombustionTemperature_ = null;                
            }
            else
            {
                this.CombustionTemperature_ = value;
            }
        }

        return this.CombustionTemperature_ as IfcThermodynamicTemperatureMeasure | null;
    }


    public get CarbonContent() : IfcPositiveRatioMeasure | null
    {
        if ( this.CarbonContent_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field CarbonContent due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field CarbonContent' );
                }

                this.CarbonContent_ = null;                
            }
            else
            {
                this.CarbonContent_ = value;
            }
        }

        return this.CarbonContent_ as IfcPositiveRatioMeasure | null;
    }


    public get LowerHeatingValue() : IfcHeatingValueMeasure | null
    {
        if ( this.LowerHeatingValue_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 3 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field LowerHeatingValue due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 3;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field LowerHeatingValue' );
                }

                this.LowerHeatingValue_ = null;                
            }
            else
            {
                this.LowerHeatingValue_ = value;
            }
        }

        return this.LowerHeatingValue_ as IfcHeatingValueMeasure | null;
    }


    public get HigherHeatingValue() : IfcHeatingValueMeasure | null
    {
        if ( this.HigherHeatingValue_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field HigherHeatingValue due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field HigherHeatingValue' );
                }

                this.HigherHeatingValue_ = null;                
            }
            else
            {
                this.HigherHeatingValue_ = value;
            }
        }

        return this.HigherHeatingValue_ as IfcHeatingValueMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
