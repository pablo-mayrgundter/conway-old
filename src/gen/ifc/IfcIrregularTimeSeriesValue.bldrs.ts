
import { IfcCalendarDate } from "./index"
import { IfcLocalTime } from "./index"
import { IfcDateAndTime } from "./index"
import { IfcVolumeMeasure } from "./index"
import { IfcTimeMeasure } from "./index"
import { IfcThermodynamicTemperatureMeasure } from "./index"
import { IfcSolidAngleMeasure } from "./index"
import { IfcPositiveRatioMeasure } from "./index"
import { IfcRatioMeasure } from "./index"
import { IfcPositivePlaneAngleMeasure } from "./index"
import { IfcPlaneAngleMeasure } from "./index"
import { IfcParameterValue } from "./index"
import { IfcNumericMeasure } from "./index"
import { IfcMassMeasure } from "./index"
import { IfcPositiveLengthMeasure } from "./index"
import { IfcLengthMeasure } from "./index"
import { IfcElectricCurrentMeasure } from "./index"
import { IfcDescriptiveMeasure } from "./index"
import { IfcCountMeasure } from "./index"
import { IfcContextDependentMeasure } from "./index"
import { IfcAreaMeasure } from "./index"
import { IfcAmountOfSubstanceMeasure } from "./index"
import { IfcLuminousIntensityMeasure } from "./index"
import { IfcNormalisedRatioMeasure } from "./index"
import { IfcComplexNumber } from "./index"
import { IfcInteger } from "./index"
import { IfcReal } from "./index"
import { IfcBoolean } from "./index"
import { IfcIdentifier } from "./index"
import { IfcText } from "./index"
import { IfcLabel } from "./index"
import { IfcLogical } from "./index"
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
import { IfcFrequencyMeasure } from "./index"
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
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcirregulartimeseriesvalue.htm */
export  class IfcIrregularTimeSeriesValue extends StepEntityBase< EntityTypesIfc > 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCIRREGULARTIMESERIESVALUE;
    }

    private TimeStamp_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
    private ListValues_? : Array<IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber|IfcInteger|IfcReal|IfcBoolean|IfcIdentifier|IfcText|IfcLabel|IfcLogical|IfcVolumetricFlowRateMeasure|IfcTimeStamp|IfcThermalTransmittanceMeasure|IfcThermalResistanceMeasure|IfcThermalAdmittanceMeasure|IfcPressureMeasure|IfcPowerMeasure|IfcMassFlowRateMeasure|IfcMassDensityMeasure|IfcLinearVelocityMeasure|IfcKinematicViscosityMeasure|IfcIntegerCountRateMeasure|IfcHeatFluxDensityMeasure|IfcFrequencyMeasure|IfcEnergyMeasure|IfcElectricVoltageMeasure|IfcDynamicViscosityMeasure|IfcCompoundPlaneAngleMeasure|IfcAngularVelocityMeasure|IfcThermalConductivityMeasure|IfcMolecularWeightMeasure|IfcVaporPermeabilityMeasure|IfcMoistureDiffusivityMeasure|IfcIsothermalMoistureCapacityMeasure|IfcSpecificHeatCapacityMeasure|IfcMonetaryMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcLuminousFluxMeasure|IfcForceMeasure|IfcInductanceMeasure|IfcIlluminanceMeasure|IfcElectricResistanceMeasure|IfcElectricConductanceMeasure|IfcElectricChargeMeasure|IfcDoseEquivalentMeasure|IfcElectricCapacitanceMeasure|IfcAbsorbedDoseMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcTorqueMeasure|IfcAccelerationMeasure|IfcLinearForceMeasure|IfcLinearStiffnessMeasure|IfcModulusOfSubgradeReactionMeasure|IfcModulusOfElasticityMeasure|IfcMomentOfInertiaMeasure|IfcPlanarForceMeasure|IfcRotationalStiffnessMeasure|IfcShearModulusMeasure|IfcLinearMomentMeasure|IfcLuminousIntensityDistributionMeasure|IfcCurvatureMeasure|IfcMassPerLengthMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcRotationalMassMeasure|IfcSectionalAreaIntegralMeasure|IfcSectionModulusMeasure|IfcTemperatureGradientMeasure|IfcThermalExpansionCoefficientMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcSoundPowerMeasure|IfcSoundPressureMeasure|IfcHeatingValueMeasure|IfcPHMeasure|IfcIonConcentrationMeasure>;

    public get TimeStamp() : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    {
        if ( this.TimeStamp_ === void 0 )
        {
            this.TimeStamp_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 0 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 0;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = ( () => { 
                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
        
                    if ( !( value instanceof IfcCalendarDate ) )
                    {                
                        return (void 0);
                    };
        
                    return value; } )() ??
( () => { 
                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
        
                    if ( !( value instanceof IfcLocalTime ) )
                    {                
                        return (void 0);
                    };
        
                    return value; } )() ??
( () => { 
                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                    let value     = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           
        
                    if ( !( value instanceof IfcDateAndTime ) )
                    {                
                        return (void 0);
                    };
        
                    return value; } )();

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.TimeStamp_ as IfcCalendarDate|IfcLocalTime|IfcDateAndTime;
    }

    public get ListValues() : Array<IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber|IfcInteger|IfcReal|IfcBoolean|IfcIdentifier|IfcText|IfcLabel|IfcLogical|IfcVolumetricFlowRateMeasure|IfcTimeStamp|IfcThermalTransmittanceMeasure|IfcThermalResistanceMeasure|IfcThermalAdmittanceMeasure|IfcPressureMeasure|IfcPowerMeasure|IfcMassFlowRateMeasure|IfcMassDensityMeasure|IfcLinearVelocityMeasure|IfcKinematicViscosityMeasure|IfcIntegerCountRateMeasure|IfcHeatFluxDensityMeasure|IfcFrequencyMeasure|IfcEnergyMeasure|IfcElectricVoltageMeasure|IfcDynamicViscosityMeasure|IfcCompoundPlaneAngleMeasure|IfcAngularVelocityMeasure|IfcThermalConductivityMeasure|IfcMolecularWeightMeasure|IfcVaporPermeabilityMeasure|IfcMoistureDiffusivityMeasure|IfcIsothermalMoistureCapacityMeasure|IfcSpecificHeatCapacityMeasure|IfcMonetaryMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcLuminousFluxMeasure|IfcForceMeasure|IfcInductanceMeasure|IfcIlluminanceMeasure|IfcElectricResistanceMeasure|IfcElectricConductanceMeasure|IfcElectricChargeMeasure|IfcDoseEquivalentMeasure|IfcElectricCapacitanceMeasure|IfcAbsorbedDoseMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcTorqueMeasure|IfcAccelerationMeasure|IfcLinearForceMeasure|IfcLinearStiffnessMeasure|IfcModulusOfSubgradeReactionMeasure|IfcModulusOfElasticityMeasure|IfcMomentOfInertiaMeasure|IfcPlanarForceMeasure|IfcRotationalStiffnessMeasure|IfcShearModulusMeasure|IfcLinearMomentMeasure|IfcLuminousIntensityDistributionMeasure|IfcCurvatureMeasure|IfcMassPerLengthMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcRotationalMassMeasure|IfcSectionalAreaIntegralMeasure|IfcSectionModulusMeasure|IfcTemperatureGradientMeasure|IfcThermalExpansionCoefficientMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcSoundPowerMeasure|IfcSoundPressureMeasure|IfcHeatingValueMeasure|IfcPHMeasure|IfcIonConcentrationMeasure>
    {
        if ( this.ListValues_ === void 0 )
        {
            this.ListValues_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 1 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 1;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value : Array<IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber|IfcInteger|IfcReal|IfcBoolean|IfcIdentifier|IfcText|IfcLabel|IfcLogical|IfcVolumetricFlowRateMeasure|IfcTimeStamp|IfcThermalTransmittanceMeasure|IfcThermalResistanceMeasure|IfcThermalAdmittanceMeasure|IfcPressureMeasure|IfcPowerMeasure|IfcMassFlowRateMeasure|IfcMassDensityMeasure|IfcLinearVelocityMeasure|IfcKinematicViscosityMeasure|IfcIntegerCountRateMeasure|IfcHeatFluxDensityMeasure|IfcFrequencyMeasure|IfcEnergyMeasure|IfcElectricVoltageMeasure|IfcDynamicViscosityMeasure|IfcCompoundPlaneAngleMeasure|IfcAngularVelocityMeasure|IfcThermalConductivityMeasure|IfcMolecularWeightMeasure|IfcVaporPermeabilityMeasure|IfcMoistureDiffusivityMeasure|IfcIsothermalMoistureCapacityMeasure|IfcSpecificHeatCapacityMeasure|IfcMonetaryMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcLuminousFluxMeasure|IfcForceMeasure|IfcInductanceMeasure|IfcIlluminanceMeasure|IfcElectricResistanceMeasure|IfcElectricConductanceMeasure|IfcElectricChargeMeasure|IfcDoseEquivalentMeasure|IfcElectricCapacitanceMeasure|IfcAbsorbedDoseMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcTorqueMeasure|IfcAccelerationMeasure|IfcLinearForceMeasure|IfcLinearStiffnessMeasure|IfcModulusOfSubgradeReactionMeasure|IfcModulusOfElasticityMeasure|IfcMomentOfInertiaMeasure|IfcPlanarForceMeasure|IfcRotationalStiffnessMeasure|IfcShearModulusMeasure|IfcLinearMomentMeasure|IfcLuminousIntensityDistributionMeasure|IfcCurvatureMeasure|IfcMassPerLengthMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcRotationalMassMeasure|IfcSectionalAreaIntegralMeasure|IfcSectionModulusMeasure|IfcTemperatureGradientMeasure|IfcThermalExpansionCoefficientMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcSoundPowerMeasure|IfcSoundPressureMeasure|IfcHeatingValueMeasure|IfcPHMeasure|IfcIonConcentrationMeasure> = [];

            for ( let address of stepExtractArray( buffer, cursor, endCursor ) )
            {
                value.push( (() => { 
                    let cursor = address;
        
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
                                    let value = stepExtractString( buffer, cursor, endCursor );
                        
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
                                    let value = stepExtractBoolean( buffer, cursor, endCursor );
                        
                        return value; } )() ??
        ( () => { 
                                    let value = stepExtractString( buffer, cursor, endCursor );
                        
                        return value; } )() ??
        ( () => { 
                                    let value = stepExtractString( buffer, cursor, endCursor );
                        
                        return value; } )() ??
        ( () => { 
                                    let value = stepExtractString( buffer, cursor, endCursor );
                        
                        return value; } )() ??
        ( () => { 
                                    let value = stepExtractBoolean( buffer, cursor, endCursor );
                        
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

        return this.ListValues_ as Array<IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber|IfcInteger|IfcReal|IfcBoolean|IfcIdentifier|IfcText|IfcLabel|IfcLogical|IfcVolumetricFlowRateMeasure|IfcTimeStamp|IfcThermalTransmittanceMeasure|IfcThermalResistanceMeasure|IfcThermalAdmittanceMeasure|IfcPressureMeasure|IfcPowerMeasure|IfcMassFlowRateMeasure|IfcMassDensityMeasure|IfcLinearVelocityMeasure|IfcKinematicViscosityMeasure|IfcIntegerCountRateMeasure|IfcHeatFluxDensityMeasure|IfcFrequencyMeasure|IfcEnergyMeasure|IfcElectricVoltageMeasure|IfcDynamicViscosityMeasure|IfcCompoundPlaneAngleMeasure|IfcAngularVelocityMeasure|IfcThermalConductivityMeasure|IfcMolecularWeightMeasure|IfcVaporPermeabilityMeasure|IfcMoistureDiffusivityMeasure|IfcIsothermalMoistureCapacityMeasure|IfcSpecificHeatCapacityMeasure|IfcMonetaryMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcLuminousFluxMeasure|IfcForceMeasure|IfcInductanceMeasure|IfcIlluminanceMeasure|IfcElectricResistanceMeasure|IfcElectricConductanceMeasure|IfcElectricChargeMeasure|IfcDoseEquivalentMeasure|IfcElectricCapacitanceMeasure|IfcAbsorbedDoseMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcTorqueMeasure|IfcAccelerationMeasure|IfcLinearForceMeasure|IfcLinearStiffnessMeasure|IfcModulusOfSubgradeReactionMeasure|IfcModulusOfElasticityMeasure|IfcMomentOfInertiaMeasure|IfcPlanarForceMeasure|IfcRotationalStiffnessMeasure|IfcShearModulusMeasure|IfcLinearMomentMeasure|IfcLuminousIntensityDistributionMeasure|IfcCurvatureMeasure|IfcMassPerLengthMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcRotationalMassMeasure|IfcSectionalAreaIntegralMeasure|IfcSectionModulusMeasure|IfcTemperatureGradientMeasure|IfcThermalExpansionCoefficientMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcSoundPowerMeasure|IfcSoundPressureMeasure|IfcHeatingValueMeasure|IfcPHMeasure|IfcIonConcentrationMeasure>;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
