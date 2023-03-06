import EntityTypesIfc from "./entity_types_ifc.bldrs"
import SchemaIfc from "./schema_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import StepEntitySchema from "../../core/step_entity_schema"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import IfcPropertySourceEnum, { IfcPropertySourceEnumDeserializeStep } from "./IfcPropertySourceEnum.bldrs"
import IfcTimeSeries from "./IfcTimeSeries.bldrs"
import IfcMaterial from "./IfcMaterial.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcThermodynamicTemperatureMeasure from "./IfcThermodynamicTemperatureMeasure.bldrs"
import IfcVolumetricFlowRateMeasure from "./IfcVolumetricFlowRateMeasure.bldrs"
import IfcTimeStamp from "./IfcTimeStamp.bldrs"
import IfcThermalTransmittanceMeasure from "./IfcThermalTransmittanceMeasure.bldrs"
import IfcThermalResistanceMeasure from "./IfcThermalResistanceMeasure.bldrs"
import IfcThermalAdmittanceMeasure from "./IfcThermalAdmittanceMeasure.bldrs"
import IfcPressureMeasure from "./IfcPressureMeasure.bldrs"
import IfcPowerMeasure from "./IfcPowerMeasure.bldrs"
import IfcMassFlowRateMeasure from "./IfcMassFlowRateMeasure.bldrs"
import IfcMassDensityMeasure from "./IfcMassDensityMeasure.bldrs"
import IfcLinearVelocityMeasure from "./IfcLinearVelocityMeasure.bldrs"
import IfcKinematicViscosityMeasure from "./IfcKinematicViscosityMeasure.bldrs"
import IfcIntegerCountRateMeasure from "./IfcIntegerCountRateMeasure.bldrs"
import IfcHeatFluxDensityMeasure from "./IfcHeatFluxDensityMeasure.bldrs"
import IfcFrequencyMeasure from "./IfcFrequencyMeasure.bldrs"
import IfcEnergyMeasure from "./IfcEnergyMeasure.bldrs"
import IfcElectricVoltageMeasure from "./IfcElectricVoltageMeasure.bldrs"
import IfcDynamicViscosityMeasure from "./IfcDynamicViscosityMeasure.bldrs"
import IfcCompoundPlaneAngleMeasure from "./IfcCompoundPlaneAngleMeasure.bldrs"
import IfcAngularVelocityMeasure from "./IfcAngularVelocityMeasure.bldrs"
import IfcThermalConductivityMeasure from "./IfcThermalConductivityMeasure.bldrs"
import IfcMolecularWeightMeasure from "./IfcMolecularWeightMeasure.bldrs"
import IfcVaporPermeabilityMeasure from "./IfcVaporPermeabilityMeasure.bldrs"
import IfcMoistureDiffusivityMeasure from "./IfcMoistureDiffusivityMeasure.bldrs"
import IfcIsothermalMoistureCapacityMeasure from "./IfcIsothermalMoistureCapacityMeasure.bldrs"
import IfcSpecificHeatCapacityMeasure from "./IfcSpecificHeatCapacityMeasure.bldrs"
import IfcMonetaryMeasure from "./IfcMonetaryMeasure.bldrs"
import IfcMagneticFluxDensityMeasure from "./IfcMagneticFluxDensityMeasure.bldrs"
import IfcMagneticFluxMeasure from "./IfcMagneticFluxMeasure.bldrs"
import IfcLuminousFluxMeasure from "./IfcLuminousFluxMeasure.bldrs"
import IfcForceMeasure from "./IfcForceMeasure.bldrs"
import IfcInductanceMeasure from "./IfcInductanceMeasure.bldrs"
import IfcIlluminanceMeasure from "./IfcIlluminanceMeasure.bldrs"
import IfcElectricResistanceMeasure from "./IfcElectricResistanceMeasure.bldrs"
import IfcElectricConductanceMeasure from "./IfcElectricConductanceMeasure.bldrs"
import IfcElectricChargeMeasure from "./IfcElectricChargeMeasure.bldrs"
import IfcDoseEquivalentMeasure from "./IfcDoseEquivalentMeasure.bldrs"
import IfcElectricCapacitanceMeasure from "./IfcElectricCapacitanceMeasure.bldrs"
import IfcAbsorbedDoseMeasure from "./IfcAbsorbedDoseMeasure.bldrs"
import IfcRadioActivityMeasure from "./IfcRadioActivityMeasure.bldrs"
import IfcRotationalFrequencyMeasure from "./IfcRotationalFrequencyMeasure.bldrs"
import IfcTorqueMeasure from "./IfcTorqueMeasure.bldrs"
import IfcAccelerationMeasure from "./IfcAccelerationMeasure.bldrs"
import IfcLinearForceMeasure from "./IfcLinearForceMeasure.bldrs"
import IfcLinearStiffnessMeasure from "./IfcLinearStiffnessMeasure.bldrs"
import IfcModulusOfSubgradeReactionMeasure from "./IfcModulusOfSubgradeReactionMeasure.bldrs"
import IfcModulusOfElasticityMeasure from "./IfcModulusOfElasticityMeasure.bldrs"
import IfcMomentOfInertiaMeasure from "./IfcMomentOfInertiaMeasure.bldrs"
import IfcPlanarForceMeasure from "./IfcPlanarForceMeasure.bldrs"
import IfcRotationalStiffnessMeasure from "./IfcRotationalStiffnessMeasure.bldrs"
import IfcShearModulusMeasure from "./IfcShearModulusMeasure.bldrs"
import IfcLinearMomentMeasure from "./IfcLinearMomentMeasure.bldrs"
import IfcLuminousIntensityDistributionMeasure from "./IfcLuminousIntensityDistributionMeasure.bldrs"
import IfcCurvatureMeasure from "./IfcCurvatureMeasure.bldrs"
import IfcMassPerLengthMeasure from "./IfcMassPerLengthMeasure.bldrs"
import IfcModulusOfLinearSubgradeReactionMeasure from "./IfcModulusOfLinearSubgradeReactionMeasure.bldrs"
import IfcModulusOfRotationalSubgradeReactionMeasure from "./IfcModulusOfRotationalSubgradeReactionMeasure.bldrs"
import IfcRotationalMassMeasure from "./IfcRotationalMassMeasure.bldrs"
import IfcSectionalAreaIntegralMeasure from "./IfcSectionalAreaIntegralMeasure.bldrs"
import IfcSectionModulusMeasure from "./IfcSectionModulusMeasure.bldrs"
import IfcTemperatureGradientMeasure from "./IfcTemperatureGradientMeasure.bldrs"
import IfcThermalExpansionCoefficientMeasure from "./IfcThermalExpansionCoefficientMeasure.bldrs"
import IfcWarpingConstantMeasure from "./IfcWarpingConstantMeasure.bldrs"
import IfcWarpingMomentMeasure from "./IfcWarpingMomentMeasure.bldrs"
import IfcSoundPowerMeasure from "./IfcSoundPowerMeasure.bldrs"
import IfcSoundPressureMeasure from "./IfcSoundPressureMeasure.bldrs"
import IfcHeatingValueMeasure from "./IfcHeatingValueMeasure.bldrs"
import IfcPHMeasure from "./IfcPHMeasure.bldrs"
import IfcIonConcentrationMeasure from "./IfcIonConcentrationMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcPropertySetDefinition from "./IfcPropertySetDefinition.bldrs"


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcfluidflowproperties.htm */
export default  class IfcFluidFlowProperties extends IfcPropertySetDefinition 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCFLUIDFLOWPROPERTIES;
    }

    public get schema(): StepEntitySchema< EntityTypesIfc >
    {
        return SchemaIfc;
    }

    private PropertySource_? : IfcPropertySourceEnum;
    private FlowConditionTimeSeries_? : IfcTimeSeries | null;
    private VelocityTimeSeries_? : IfcTimeSeries | null;
    private FlowrateTimeSeries_? : IfcTimeSeries | null;
    private Fluid_? : IfcMaterial;
    private PressureTimeSeries_? : IfcTimeSeries | null;
    private UserDefinedPropertySource_? : IfcLabel | null;
    private TemperatureSingleValue_? : IfcThermodynamicTemperatureMeasure | null;
    private WetBulbTemperatureSingleValue_? : IfcThermodynamicTemperatureMeasure | null;
    private WetBulbTemperatureTimeSeries_? : IfcTimeSeries | null;
    private TemperatureTimeSeries_? : IfcTimeSeries | null;
    private FlowrateSingleValue_? : IfcVolumetricFlowRateMeasure|IfcTimeStamp|IfcThermalTransmittanceMeasure|IfcThermalResistanceMeasure|IfcThermalAdmittanceMeasure|IfcPressureMeasure|IfcPowerMeasure|IfcMassFlowRateMeasure|IfcMassDensityMeasure|IfcLinearVelocityMeasure|IfcKinematicViscosityMeasure|IfcIntegerCountRateMeasure|IfcHeatFluxDensityMeasure|IfcFrequencyMeasure|IfcEnergyMeasure|IfcElectricVoltageMeasure|IfcDynamicViscosityMeasure|IfcCompoundPlaneAngleMeasure|IfcAngularVelocityMeasure|IfcThermalConductivityMeasure|IfcMolecularWeightMeasure|IfcVaporPermeabilityMeasure|IfcMoistureDiffusivityMeasure|IfcIsothermalMoistureCapacityMeasure|IfcSpecificHeatCapacityMeasure|IfcMonetaryMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcLuminousFluxMeasure|IfcForceMeasure|IfcInductanceMeasure|IfcIlluminanceMeasure|IfcElectricResistanceMeasure|IfcElectricConductanceMeasure|IfcElectricChargeMeasure|IfcDoseEquivalentMeasure|IfcElectricCapacitanceMeasure|IfcAbsorbedDoseMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcTorqueMeasure|IfcAccelerationMeasure|IfcLinearForceMeasure|IfcLinearStiffnessMeasure|IfcModulusOfSubgradeReactionMeasure|IfcModulusOfElasticityMeasure|IfcMomentOfInertiaMeasure|IfcPlanarForceMeasure|IfcRotationalStiffnessMeasure|IfcShearModulusMeasure|IfcLinearMomentMeasure|IfcLuminousIntensityDistributionMeasure|IfcCurvatureMeasure|IfcMassPerLengthMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcRotationalMassMeasure|IfcSectionalAreaIntegralMeasure|IfcSectionModulusMeasure|IfcTemperatureGradientMeasure|IfcThermalExpansionCoefficientMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcSoundPowerMeasure|IfcSoundPressureMeasure|IfcHeatingValueMeasure|IfcPHMeasure|IfcIonConcentrationMeasure | null;
    private FlowConditionSingleValue_? : IfcPositiveRatioMeasure | null;
    private VelocitySingleValue_? : IfcLinearVelocityMeasure | null;
    private PressureSingleValue_? : IfcPressureMeasure | null;


    public get PropertySource() : IfcPropertySourceEnum
    {
        if ( this.PropertySource_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PropertySource due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcPropertySourceEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field PropertySource' );
            };

            this.PropertySource_ = value;
        }

        return this.PropertySource_ as IfcPropertySourceEnum;
    }


    public get FlowConditionTimeSeries() : IfcTimeSeries | null
    {
        if ( this.FlowConditionTimeSeries_ === void 0 )
        {
            
        }

        return this.FlowConditionTimeSeries_ as IfcTimeSeries | null;
    }


    public get VelocityTimeSeries() : IfcTimeSeries | null
    {
        if ( this.VelocityTimeSeries_ === void 0 )
        {
            
        }

        return this.VelocityTimeSeries_ as IfcTimeSeries | null;
    }


    public get FlowrateTimeSeries() : IfcTimeSeries | null
    {
        if ( this.FlowrateTimeSeries_ === void 0 )
        {
            
        }

        return this.FlowrateTimeSeries_ as IfcTimeSeries | null;
    }


    public get Fluid() : IfcMaterial
    {
        if ( this.Fluid_ === void 0 )
        {
            
        }

        return this.Fluid_ as IfcMaterial;
    }


    public get PressureTimeSeries() : IfcTimeSeries | null
    {
        if ( this.PressureTimeSeries_ === void 0 )
        {
            
        }

        return this.PressureTimeSeries_ as IfcTimeSeries | null;
    }


    public get UserDefinedPropertySource() : IfcLabel | null
    {
        if ( this.UserDefinedPropertySource_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field UserDefinedPropertySource due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 10;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field UserDefinedPropertySource' );
                }

                this.UserDefinedPropertySource_ = null;                
            }
            else
            {
                this.UserDefinedPropertySource_ = value;
            }
        }

        return this.UserDefinedPropertySource_ as IfcLabel | null;
    }


    public get TemperatureSingleValue() : IfcThermodynamicTemperatureMeasure | null
    {
        if ( this.TemperatureSingleValue_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 11 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field TemperatureSingleValue due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field TemperatureSingleValue' );
                }

                this.TemperatureSingleValue_ = null;                
            }
            else
            {
                this.TemperatureSingleValue_ = value;
            }
        }

        return this.TemperatureSingleValue_ as IfcThermodynamicTemperatureMeasure | null;
    }


    public get WetBulbTemperatureSingleValue() : IfcThermodynamicTemperatureMeasure | null
    {
        if ( this.WetBulbTemperatureSingleValue_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 12 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field WetBulbTemperatureSingleValue due to too few fields in record" ); 
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
                    throw new Error( 'Value in STEP was incorrectly typed for field WetBulbTemperatureSingleValue' );
                }

                this.WetBulbTemperatureSingleValue_ = null;                
            }
            else
            {
                this.WetBulbTemperatureSingleValue_ = value;
            }
        }

        return this.WetBulbTemperatureSingleValue_ as IfcThermodynamicTemperatureMeasure | null;
    }


    public get WetBulbTemperatureTimeSeries() : IfcTimeSeries | null
    {
        if ( this.WetBulbTemperatureTimeSeries_ === void 0 )
        {
            
        }

        return this.WetBulbTemperatureTimeSeries_ as IfcTimeSeries | null;
    }


    public get TemperatureTimeSeries() : IfcTimeSeries | null
    {
        if ( this.TemperatureTimeSeries_ === void 0 )
        {
            
        }

        return this.TemperatureTimeSeries_ as IfcTimeSeries | null;
    }


    public get FlowrateSingleValue() : IfcVolumetricFlowRateMeasure|IfcTimeStamp|IfcThermalTransmittanceMeasure|IfcThermalResistanceMeasure|IfcThermalAdmittanceMeasure|IfcPressureMeasure|IfcPowerMeasure|IfcMassFlowRateMeasure|IfcMassDensityMeasure|IfcLinearVelocityMeasure|IfcKinematicViscosityMeasure|IfcIntegerCountRateMeasure|IfcHeatFluxDensityMeasure|IfcFrequencyMeasure|IfcEnergyMeasure|IfcElectricVoltageMeasure|IfcDynamicViscosityMeasure|IfcCompoundPlaneAngleMeasure|IfcAngularVelocityMeasure|IfcThermalConductivityMeasure|IfcMolecularWeightMeasure|IfcVaporPermeabilityMeasure|IfcMoistureDiffusivityMeasure|IfcIsothermalMoistureCapacityMeasure|IfcSpecificHeatCapacityMeasure|IfcMonetaryMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcLuminousFluxMeasure|IfcForceMeasure|IfcInductanceMeasure|IfcIlluminanceMeasure|IfcElectricResistanceMeasure|IfcElectricConductanceMeasure|IfcElectricChargeMeasure|IfcDoseEquivalentMeasure|IfcElectricCapacitanceMeasure|IfcAbsorbedDoseMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcTorqueMeasure|IfcAccelerationMeasure|IfcLinearForceMeasure|IfcLinearStiffnessMeasure|IfcModulusOfSubgradeReactionMeasure|IfcModulusOfElasticityMeasure|IfcMomentOfInertiaMeasure|IfcPlanarForceMeasure|IfcRotationalStiffnessMeasure|IfcShearModulusMeasure|IfcLinearMomentMeasure|IfcLuminousIntensityDistributionMeasure|IfcCurvatureMeasure|IfcMassPerLengthMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcRotationalMassMeasure|IfcSectionalAreaIntegralMeasure|IfcSectionModulusMeasure|IfcTemperatureGradientMeasure|IfcThermalExpansionCoefficientMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcSoundPowerMeasure|IfcSoundPressureMeasure|IfcHeatingValueMeasure|IfcPHMeasure|IfcIonConcentrationMeasure | null
    {
        if ( this.FlowrateSingleValue_ === void 0 )
        {
            
        }

        return this.FlowrateSingleValue_ as IfcVolumetricFlowRateMeasure|IfcTimeStamp|IfcThermalTransmittanceMeasure|IfcThermalResistanceMeasure|IfcThermalAdmittanceMeasure|IfcPressureMeasure|IfcPowerMeasure|IfcMassFlowRateMeasure|IfcMassDensityMeasure|IfcLinearVelocityMeasure|IfcKinematicViscosityMeasure|IfcIntegerCountRateMeasure|IfcHeatFluxDensityMeasure|IfcFrequencyMeasure|IfcEnergyMeasure|IfcElectricVoltageMeasure|IfcDynamicViscosityMeasure|IfcCompoundPlaneAngleMeasure|IfcAngularVelocityMeasure|IfcThermalConductivityMeasure|IfcMolecularWeightMeasure|IfcVaporPermeabilityMeasure|IfcMoistureDiffusivityMeasure|IfcIsothermalMoistureCapacityMeasure|IfcSpecificHeatCapacityMeasure|IfcMonetaryMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcLuminousFluxMeasure|IfcForceMeasure|IfcInductanceMeasure|IfcIlluminanceMeasure|IfcElectricResistanceMeasure|IfcElectricConductanceMeasure|IfcElectricChargeMeasure|IfcDoseEquivalentMeasure|IfcElectricCapacitanceMeasure|IfcAbsorbedDoseMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcTorqueMeasure|IfcAccelerationMeasure|IfcLinearForceMeasure|IfcLinearStiffnessMeasure|IfcModulusOfSubgradeReactionMeasure|IfcModulusOfElasticityMeasure|IfcMomentOfInertiaMeasure|IfcPlanarForceMeasure|IfcRotationalStiffnessMeasure|IfcShearModulusMeasure|IfcLinearMomentMeasure|IfcLuminousIntensityDistributionMeasure|IfcCurvatureMeasure|IfcMassPerLengthMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcRotationalMassMeasure|IfcSectionalAreaIntegralMeasure|IfcSectionModulusMeasure|IfcTemperatureGradientMeasure|IfcThermalExpansionCoefficientMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcSoundPowerMeasure|IfcSoundPressureMeasure|IfcHeatingValueMeasure|IfcPHMeasure|IfcIonConcentrationMeasure | null;
    }


    public get FlowConditionSingleValue() : IfcPositiveRatioMeasure | null
    {
        if ( this.FlowConditionSingleValue_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 16 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field FlowConditionSingleValue due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 16;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field FlowConditionSingleValue' );
                }

                this.FlowConditionSingleValue_ = null;                
            }
            else
            {
                this.FlowConditionSingleValue_ = value;
            }
        }

        return this.FlowConditionSingleValue_ as IfcPositiveRatioMeasure | null;
    }


    public get VelocitySingleValue() : IfcLinearVelocityMeasure | null
    {
        if ( this.VelocitySingleValue_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 17 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field VelocitySingleValue due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 17;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field VelocitySingleValue' );
                }

                this.VelocitySingleValue_ = null;                
            }
            else
            {
                this.VelocitySingleValue_ = value;
            }
        }

        return this.VelocitySingleValue_ as IfcLinearVelocityMeasure | null;
    }


    public get PressureSingleValue() : IfcPressureMeasure | null
    {
        if ( this.PressureSingleValue_ === void 0 )
        {
            this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 18 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field PressureSingleValue due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 18;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

            if ( value !== void 0 )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field PressureSingleValue' );
                }

                this.PressureSingleValue_ = null;                
            }
            else
            {
                this.PressureSingleValue_ = value;
            }
        }

        return this.PressureSingleValue_ as IfcPressureMeasure | null;
    }


    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
