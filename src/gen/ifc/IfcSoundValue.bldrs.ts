
import { IfcPropertySetDefinition } from "./index"
import { IfcTimeSeries } from "./index"
import { IfcFrequencyMeasure } from "./index"
import { IfcVolumetricFlowRateMeasure } from "./index"
import { IfcTimeStamp } from "./index"
import { IfcThermalTransmittanceMeasure } from "./index"
import { IfcThermalResistanceMeasure } from "./index"
import { IfcThermalAdmittanceMeasure } from "./index"
import { IfcPressureMeasure } from "./index"
import { IfcPowerMeasure } from "./index"
import { IfcMassFlowRateMeasure } from "./index"
import { IfcMassDensityMeasure } from "./index"
import { IfcLinearVelocityMeasure } from "./index"
import { IfcKinematicViscosityMeasure } from "./index"
import { IfcIntegerCountRateMeasure } from "./index"
import { IfcHeatFluxDensityMeasure } from "./index"
import { IfcEnergyMeasure } from "./index"
import { IfcElectricVoltageMeasure } from "./index"
import { IfcDynamicViscosityMeasure } from "./index"
import { IfcCompoundPlaneAngleMeasure } from "./index"
import { IfcAngularVelocityMeasure } from "./index"
import { IfcThermalConductivityMeasure } from "./index"
import { IfcMolecularWeightMeasure } from "./index"
import { IfcVaporPermeabilityMeasure } from "./index"
import { IfcMoistureDiffusivityMeasure } from "./index"
import { IfcIsothermalMoistureCapacityMeasure } from "./index"
import { IfcSpecificHeatCapacityMeasure } from "./index"
import { IfcMonetaryMeasure } from "./index"
import { IfcMagneticFluxDensityMeasure } from "./index"
import { IfcMagneticFluxMeasure } from "./index"
import { IfcLuminousFluxMeasure } from "./index"
import { IfcForceMeasure } from "./index"
import { IfcInductanceMeasure } from "./index"
import { IfcIlluminanceMeasure } from "./index"
import { IfcElectricResistanceMeasure } from "./index"
import { IfcElectricConductanceMeasure } from "./index"
import { IfcElectricChargeMeasure } from "./index"
import { IfcDoseEquivalentMeasure } from "./index"
import { IfcElectricCapacitanceMeasure } from "./index"
import { IfcAbsorbedDoseMeasure } from "./index"
import { IfcRadioActivityMeasure } from "./index"
import { IfcRotationalFrequencyMeasure } from "./index"
import { IfcTorqueMeasure } from "./index"
import { IfcAccelerationMeasure } from "./index"
import { IfcLinearForceMeasure } from "./index"
import { IfcLinearStiffnessMeasure } from "./index"
import { IfcModulusOfSubgradeReactionMeasure } from "./index"
import { IfcModulusOfElasticityMeasure } from "./index"
import { IfcMomentOfInertiaMeasure } from "./index"
import { IfcPlanarForceMeasure } from "./index"
import { IfcRotationalStiffnessMeasure } from "./index"
import { IfcShearModulusMeasure } from "./index"
import { IfcLinearMomentMeasure } from "./index"
import { IfcLuminousIntensityDistributionMeasure } from "./index"
import { IfcCurvatureMeasure } from "./index"
import { IfcMassPerLengthMeasure } from "./index"
import { IfcModulusOfLinearSubgradeReactionMeasure } from "./index"
import { IfcModulusOfRotationalSubgradeReactionMeasure } from "./index"
import { IfcRotationalMassMeasure } from "./index"
import { IfcSectionalAreaIntegralMeasure } from "./index"
import { IfcSectionModulusMeasure } from "./index"
import { IfcTemperatureGradientMeasure } from "./index"
import { IfcThermalExpansionCoefficientMeasure } from "./index"
import { IfcWarpingConstantMeasure } from "./index"
import { IfcWarpingMomentMeasure } from "./index"
import { IfcSoundPowerMeasure } from "./index"
import { IfcSoundPressureMeasure } from "./index"
import { IfcHeatingValueMeasure } from "./index"
import { IfcPHMeasure } from "./index"
import { IfcIonConcentrationMeasure } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';


///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcsoundvalue.htm */
export  class IfcSoundValue extends IfcPropertySetDefinition 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCSOUNDVALUE;
    }

    private SoundLevelTimeSeries_? : IfcTimeSeries | null;
    private Frequency_? : IfcFrequencyMeasure;
    private SoundLevelSingleValue_? : IfcVolumetricFlowRateMeasure|IfcTimeStamp|IfcThermalTransmittanceMeasure|IfcThermalResistanceMeasure|IfcThermalAdmittanceMeasure|IfcPressureMeasure|IfcPowerMeasure|IfcMassFlowRateMeasure|IfcMassDensityMeasure|IfcLinearVelocityMeasure|IfcKinematicViscosityMeasure|IfcIntegerCountRateMeasure|IfcHeatFluxDensityMeasure|IfcFrequencyMeasure|IfcEnergyMeasure|IfcElectricVoltageMeasure|IfcDynamicViscosityMeasure|IfcCompoundPlaneAngleMeasure|IfcAngularVelocityMeasure|IfcThermalConductivityMeasure|IfcMolecularWeightMeasure|IfcVaporPermeabilityMeasure|IfcMoistureDiffusivityMeasure|IfcIsothermalMoistureCapacityMeasure|IfcSpecificHeatCapacityMeasure|IfcMonetaryMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcLuminousFluxMeasure|IfcForceMeasure|IfcInductanceMeasure|IfcIlluminanceMeasure|IfcElectricResistanceMeasure|IfcElectricConductanceMeasure|IfcElectricChargeMeasure|IfcDoseEquivalentMeasure|IfcElectricCapacitanceMeasure|IfcAbsorbedDoseMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcTorqueMeasure|IfcAccelerationMeasure|IfcLinearForceMeasure|IfcLinearStiffnessMeasure|IfcModulusOfSubgradeReactionMeasure|IfcModulusOfElasticityMeasure|IfcMomentOfInertiaMeasure|IfcPlanarForceMeasure|IfcRotationalStiffnessMeasure|IfcShearModulusMeasure|IfcLinearMomentMeasure|IfcLuminousIntensityDistributionMeasure|IfcCurvatureMeasure|IfcMassPerLengthMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcRotationalMassMeasure|IfcSectionalAreaIntegralMeasure|IfcSectionModulusMeasure|IfcTemperatureGradientMeasure|IfcThermalExpansionCoefficientMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcSoundPowerMeasure|IfcSoundPressureMeasure|IfcHeatingValueMeasure|IfcPHMeasure|IfcIonConcentrationMeasure | null;

    public get SoundLevelTimeSeries() : IfcTimeSeries | null
    {
        if ( this.SoundLevelTimeSeries_ === void 0 )
        {
            this.SoundLevelTimeSeries_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let expressID = stepExtractReference( buffer, cursor, endCursor );
            let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           

            if ( !( value instanceof IfcTimeSeries ) )
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

        return this.SoundLevelTimeSeries_ as IfcTimeSeries | null;
    }

    public get Frequency() : IfcFrequencyMeasure
    {
        if ( this.Frequency_ === void 0 )
        {
            this.Frequency_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

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

        return this.Frequency_ as IfcFrequencyMeasure;
    }

    public get SoundLevelSingleValue() : IfcVolumetricFlowRateMeasure|IfcTimeStamp|IfcThermalTransmittanceMeasure|IfcThermalResistanceMeasure|IfcThermalAdmittanceMeasure|IfcPressureMeasure|IfcPowerMeasure|IfcMassFlowRateMeasure|IfcMassDensityMeasure|IfcLinearVelocityMeasure|IfcKinematicViscosityMeasure|IfcIntegerCountRateMeasure|IfcHeatFluxDensityMeasure|IfcFrequencyMeasure|IfcEnergyMeasure|IfcElectricVoltageMeasure|IfcDynamicViscosityMeasure|IfcCompoundPlaneAngleMeasure|IfcAngularVelocityMeasure|IfcThermalConductivityMeasure|IfcMolecularWeightMeasure|IfcVaporPermeabilityMeasure|IfcMoistureDiffusivityMeasure|IfcIsothermalMoistureCapacityMeasure|IfcSpecificHeatCapacityMeasure|IfcMonetaryMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcLuminousFluxMeasure|IfcForceMeasure|IfcInductanceMeasure|IfcIlluminanceMeasure|IfcElectricResistanceMeasure|IfcElectricConductanceMeasure|IfcElectricChargeMeasure|IfcDoseEquivalentMeasure|IfcElectricCapacitanceMeasure|IfcAbsorbedDoseMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcTorqueMeasure|IfcAccelerationMeasure|IfcLinearForceMeasure|IfcLinearStiffnessMeasure|IfcModulusOfSubgradeReactionMeasure|IfcModulusOfElasticityMeasure|IfcMomentOfInertiaMeasure|IfcPlanarForceMeasure|IfcRotationalStiffnessMeasure|IfcShearModulusMeasure|IfcLinearMomentMeasure|IfcLuminousIntensityDistributionMeasure|IfcCurvatureMeasure|IfcMassPerLengthMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcRotationalMassMeasure|IfcSectionalAreaIntegralMeasure|IfcSectionModulusMeasure|IfcTemperatureGradientMeasure|IfcThermalExpansionCoefficientMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcSoundPowerMeasure|IfcSoundPressureMeasure|IfcHeatingValueMeasure|IfcPHMeasure|IfcIonConcentrationMeasure | null
    {
        if ( this.SoundLevelSingleValue_ === void 0 )
        {
            this.SoundLevelSingleValue_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = ( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value : Array<number> = [];
        
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
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )() ??
( () => { 
                    let value = stepExtractNumber( buffer, cursor, endCursor );
        
        return value; } )();

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

        return this.SoundLevelSingleValue_ as IfcVolumetricFlowRateMeasure|IfcTimeStamp|IfcThermalTransmittanceMeasure|IfcThermalResistanceMeasure|IfcThermalAdmittanceMeasure|IfcPressureMeasure|IfcPowerMeasure|IfcMassFlowRateMeasure|IfcMassDensityMeasure|IfcLinearVelocityMeasure|IfcKinematicViscosityMeasure|IfcIntegerCountRateMeasure|IfcHeatFluxDensityMeasure|IfcFrequencyMeasure|IfcEnergyMeasure|IfcElectricVoltageMeasure|IfcDynamicViscosityMeasure|IfcCompoundPlaneAngleMeasure|IfcAngularVelocityMeasure|IfcThermalConductivityMeasure|IfcMolecularWeightMeasure|IfcVaporPermeabilityMeasure|IfcMoistureDiffusivityMeasure|IfcIsothermalMoistureCapacityMeasure|IfcSpecificHeatCapacityMeasure|IfcMonetaryMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcLuminousFluxMeasure|IfcForceMeasure|IfcInductanceMeasure|IfcIlluminanceMeasure|IfcElectricResistanceMeasure|IfcElectricConductanceMeasure|IfcElectricChargeMeasure|IfcDoseEquivalentMeasure|IfcElectricCapacitanceMeasure|IfcAbsorbedDoseMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcTorqueMeasure|IfcAccelerationMeasure|IfcLinearForceMeasure|IfcLinearStiffnessMeasure|IfcModulusOfSubgradeReactionMeasure|IfcModulusOfElasticityMeasure|IfcMomentOfInertiaMeasure|IfcPlanarForceMeasure|IfcRotationalStiffnessMeasure|IfcShearModulusMeasure|IfcLinearMomentMeasure|IfcLuminousIntensityDistributionMeasure|IfcCurvatureMeasure|IfcMassPerLengthMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcRotationalMassMeasure|IfcSectionalAreaIntegralMeasure|IfcSectionModulusMeasure|IfcTemperatureGradientMeasure|IfcThermalExpansionCoefficientMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcSoundPowerMeasure|IfcSoundPressureMeasure|IfcHeatingValueMeasure|IfcPHMeasure|IfcIonConcentrationMeasure | null;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
