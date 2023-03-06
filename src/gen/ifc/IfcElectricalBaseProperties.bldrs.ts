import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcElectricCurrentEnum, { IfcElectricCurrentEnumDeserializeStep } from "./IfcElectricCurrentEnum.bldrs"
import IfcElectricVoltageMeasure from "./IfcElectricVoltageMeasure.bldrs"
import IfcFrequencyMeasure from "./IfcFrequencyMeasure.bldrs"
import IfcElectricCurrentMeasure from "./IfcElectricCurrentMeasure.bldrs"
import IfcPowerMeasure from "./IfcPowerMeasure.bldrs"
import IfcEnergyProperties from "./IfcEnergyProperties.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcelectricalbaseproperties.htm */
export default  class IfcElectricalBaseProperties extends IfcEnergyProperties 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCELECTRICALBASEPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private ElectricCurrentType_? : IfcElectricCurrentEnum | null;
    private InputVoltage_? : IfcElectricVoltageMeasure;
    private InputFrequency_? : IfcFrequencyMeasure;
    private FullLoadCurrent_? : IfcElectricCurrentMeasure | null;
    private MinimumCircuitCurrent_? : IfcElectricCurrentMeasure | null;
    private MaximumPowerInput_? : IfcPowerMeasure | null;
    private RatedPowerInput_? : IfcPowerMeasure | null;
    private InputPhase_? : number;


    public get ElectricCurrentType() : IfcElectricCurrentEnum | null
    {
        if ( this.ElectricCurrentType_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field ElectricCurrentType due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcElectricCurrentEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field ElectricCurrentType' );
                }

                this.ElectricCurrentType_ = null;                
            }
            else
            {
                this.ElectricCurrentType_ = value;
            }
        }

        return this.ElectricCurrentType_ as IfcElectricCurrentEnum | null;
    }


    public get InputVoltage() : IfcElectricVoltageMeasure
    {
        if ( this.InputVoltage_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field InputVoltage due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field InputVoltage' );
            };

            this.InputVoltage_ = value;
        }

        return this.InputVoltage_ as IfcElectricVoltageMeasure;
    }


    public get InputFrequency() : IfcFrequencyMeasure
    {
        if ( this.InputFrequency_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field InputFrequency due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field InputFrequency' );
            };

            this.InputFrequency_ = value;
        }

        return this.InputFrequency_ as IfcFrequencyMeasure;
    }


    public get FullLoadCurrent() : IfcElectricCurrentMeasure | null
    {
        if ( this.FullLoadCurrent_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FullLoadCurrent due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 9;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field FullLoadCurrent' );
                }

                this.FullLoadCurrent_ = null;                
            }
            else
            {
                this.FullLoadCurrent_ = value;
            }
        }

        return this.FullLoadCurrent_ as IfcElectricCurrentMeasure | null;
    }


    public get MinimumCircuitCurrent() : IfcElectricCurrentMeasure | null
    {
        if ( this.MinimumCircuitCurrent_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MinimumCircuitCurrent due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field MinimumCircuitCurrent' );
                }

                this.MinimumCircuitCurrent_ = null;                
            }
            else
            {
                this.MinimumCircuitCurrent_ = value;
            }
        }

        return this.MinimumCircuitCurrent_ as IfcElectricCurrentMeasure | null;
    }


    public get MaximumPowerInput() : IfcPowerMeasure | null
    {
        if ( this.MaximumPowerInput_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 11 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field MaximumPowerInput due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 11;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field MaximumPowerInput' );
                }

                this.MaximumPowerInput_ = null;                
            }
            else
            {
                this.MaximumPowerInput_ = value;
            }
        }

        return this.MaximumPowerInput_ as IfcPowerMeasure | null;
    }


    public get RatedPowerInput() : IfcPowerMeasure | null
    {
        if ( this.RatedPowerInput_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 12 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field RatedPowerInput due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 12;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field RatedPowerInput' );
                }

                this.RatedPowerInput_ = null;                
            }
            else
            {
                this.RatedPowerInput_ = value;
            }
        }

        return this.RatedPowerInput_ as IfcPowerMeasure | null;
    }


    public get InputPhase() : number
    {
        if ( this.InputPhase_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 13 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field InputPhase due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 13;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field InputPhase' );
            };

            this.InputPhase_ = value;
        }

        return this.InputPhase_ as number;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
