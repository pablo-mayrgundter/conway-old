
import { IfcSimpleProperty } from "./index"
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
import { IfcDerivedUnit } from "./index"
import { IfcNamedUnit } from "./index"
import { IfcMonetaryUnit } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray, NVL, HIINDEX, SIZEOF} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import {IfcBaseAxis, IfcBooleanChoose, IfcBuild2Axes, IfcBuildAxes, IfcConstraintsParamBSpline, IfcConvertDirectionInto2D, IfcCorrectDimensions, IfcCorrectFillAreaStyle, IfcCorrectLocalPlacement, IfcCorrectObjectAssignment, IfcCorrectUnitAssignment, IfcCrossProduct, IfcCurveDim, IfcDeriveDimensionalExponents, IfcDimensionsForSiUnit, IfcDotProduct, IfcFirstProjAxis, IfcListToArray, IfcLoopHeadToTail, IfcMakeArrayOfArray, IfcMlsTotalThickness, IfcNormalise, IfcOrthogonalComplement, IfcPathHeadToTail, IfcSameAxis2Placement, IfcSameCartesianPoint, IfcSameDirection, IfcSameValidPrecision, IfcSameValue, IfcScalarTimesVector, IfcSecondProjAxis, IfcShapeRepresentationTypes, IfcTaperedSweptAreaProfiles, IfcTopologyRepresentationTypes, IfcUniqueDefinitionNames, IfcUniquePropertyName, IfcUniquePropertySetNames, IfcUniqueQuantityNames, IfcVectorDifference, IfcVectorSum } from "../../core/ifc/ifc_functions"

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcpropertylistvalue.htm */
export  class IfcPropertyListValue extends IfcSimpleProperty 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCPROPERTYLISTVALUE;
    }

    private ListValues_? : Array<IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber|IfcInteger|IfcReal|IfcBoolean|IfcIdentifier|IfcText|IfcLabel|IfcLogical|IfcVolumetricFlowRateMeasure|IfcTimeStamp|IfcThermalTransmittanceMeasure|IfcThermalResistanceMeasure|IfcThermalAdmittanceMeasure|IfcPressureMeasure|IfcPowerMeasure|IfcMassFlowRateMeasure|IfcMassDensityMeasure|IfcLinearVelocityMeasure|IfcKinematicViscosityMeasure|IfcIntegerCountRateMeasure|IfcHeatFluxDensityMeasure|IfcFrequencyMeasure|IfcEnergyMeasure|IfcElectricVoltageMeasure|IfcDynamicViscosityMeasure|IfcCompoundPlaneAngleMeasure|IfcAngularVelocityMeasure|IfcThermalConductivityMeasure|IfcMolecularWeightMeasure|IfcVaporPermeabilityMeasure|IfcMoistureDiffusivityMeasure|IfcIsothermalMoistureCapacityMeasure|IfcSpecificHeatCapacityMeasure|IfcMonetaryMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcLuminousFluxMeasure|IfcForceMeasure|IfcInductanceMeasure|IfcIlluminanceMeasure|IfcElectricResistanceMeasure|IfcElectricConductanceMeasure|IfcElectricChargeMeasure|IfcDoseEquivalentMeasure|IfcElectricCapacitanceMeasure|IfcAbsorbedDoseMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcTorqueMeasure|IfcAccelerationMeasure|IfcLinearForceMeasure|IfcLinearStiffnessMeasure|IfcModulusOfSubgradeReactionMeasure|IfcModulusOfElasticityMeasure|IfcMomentOfInertiaMeasure|IfcPlanarForceMeasure|IfcRotationalStiffnessMeasure|IfcShearModulusMeasure|IfcLinearMomentMeasure|IfcLuminousIntensityDistributionMeasure|IfcCurvatureMeasure|IfcMassPerLengthMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcRotationalMassMeasure|IfcSectionalAreaIntegralMeasure|IfcSectionModulusMeasure|IfcTemperatureGradientMeasure|IfcThermalExpansionCoefficientMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcSoundPowerMeasure|IfcSoundPressureMeasure|IfcHeatingValueMeasure|IfcPHMeasure|IfcIonConcentrationMeasure>;
    private Unit_? : IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit | null;

    public get ListValues() : Array<IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber|IfcInteger|IfcReal|IfcBoolean|IfcIdentifier|IfcText|IfcLabel|IfcLogical|IfcVolumetricFlowRateMeasure|IfcTimeStamp|IfcThermalTransmittanceMeasure|IfcThermalResistanceMeasure|IfcThermalAdmittanceMeasure|IfcPressureMeasure|IfcPowerMeasure|IfcMassFlowRateMeasure|IfcMassDensityMeasure|IfcLinearVelocityMeasure|IfcKinematicViscosityMeasure|IfcIntegerCountRateMeasure|IfcHeatFluxDensityMeasure|IfcFrequencyMeasure|IfcEnergyMeasure|IfcElectricVoltageMeasure|IfcDynamicViscosityMeasure|IfcCompoundPlaneAngleMeasure|IfcAngularVelocityMeasure|IfcThermalConductivityMeasure|IfcMolecularWeightMeasure|IfcVaporPermeabilityMeasure|IfcMoistureDiffusivityMeasure|IfcIsothermalMoistureCapacityMeasure|IfcSpecificHeatCapacityMeasure|IfcMonetaryMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcLuminousFluxMeasure|IfcForceMeasure|IfcInductanceMeasure|IfcIlluminanceMeasure|IfcElectricResistanceMeasure|IfcElectricConductanceMeasure|IfcElectricChargeMeasure|IfcDoseEquivalentMeasure|IfcElectricCapacitanceMeasure|IfcAbsorbedDoseMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcTorqueMeasure|IfcAccelerationMeasure|IfcLinearForceMeasure|IfcLinearStiffnessMeasure|IfcModulusOfSubgradeReactionMeasure|IfcModulusOfElasticityMeasure|IfcMomentOfInertiaMeasure|IfcPlanarForceMeasure|IfcRotationalStiffnessMeasure|IfcShearModulusMeasure|IfcLinearMomentMeasure|IfcLuminousIntensityDistributionMeasure|IfcCurvatureMeasure|IfcMassPerLengthMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcRotationalMassMeasure|IfcSectionalAreaIntegralMeasure|IfcSectionModulusMeasure|IfcTemperatureGradientMeasure|IfcThermalExpansionCoefficientMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcSoundPowerMeasure|IfcSoundPressureMeasure|IfcHeatingValueMeasure|IfcPHMeasure|IfcIonConcentrationMeasure>
    {
        if ( this.ListValues_ === void 0 )
        {
            this.ListValues_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 2 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 2;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value : Array<IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber|IfcInteger|IfcReal|IfcBoolean|IfcIdentifier|IfcText|IfcLabel|IfcLogical|IfcVolumetricFlowRateMeasure|IfcTimeStamp|IfcThermalTransmittanceMeasure|IfcThermalResistanceMeasure|IfcThermalAdmittanceMeasure|IfcPressureMeasure|IfcPowerMeasure|IfcMassFlowRateMeasure|IfcMassDensityMeasure|IfcLinearVelocityMeasure|IfcKinematicViscosityMeasure|IfcIntegerCountRateMeasure|IfcHeatFluxDensityMeasure|IfcFrequencyMeasure|IfcEnergyMeasure|IfcElectricVoltageMeasure|IfcDynamicViscosityMeasure|IfcCompoundPlaneAngleMeasure|IfcAngularVelocityMeasure|IfcThermalConductivityMeasure|IfcMolecularWeightMeasure|IfcVaporPermeabilityMeasure|IfcMoistureDiffusivityMeasure|IfcIsothermalMoistureCapacityMeasure|IfcSpecificHeatCapacityMeasure|IfcMonetaryMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcLuminousFluxMeasure|IfcForceMeasure|IfcInductanceMeasure|IfcIlluminanceMeasure|IfcElectricResistanceMeasure|IfcElectricConductanceMeasure|IfcElectricChargeMeasure|IfcDoseEquivalentMeasure|IfcElectricCapacitanceMeasure|IfcAbsorbedDoseMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcTorqueMeasure|IfcAccelerationMeasure|IfcLinearForceMeasure|IfcLinearStiffnessMeasure|IfcModulusOfSubgradeReactionMeasure|IfcModulusOfElasticityMeasure|IfcMomentOfInertiaMeasure|IfcPlanarForceMeasure|IfcRotationalStiffnessMeasure|IfcShearModulusMeasure|IfcLinearMomentMeasure|IfcLuminousIntensityDistributionMeasure|IfcCurvatureMeasure|IfcMassPerLengthMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcRotationalMassMeasure|IfcSectionalAreaIntegralMeasure|IfcSectionModulusMeasure|IfcTemperatureGradientMeasure|IfcThermalExpansionCoefficientMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcSoundPowerMeasure|IfcSoundPressureMeasure|IfcHeatingValueMeasure|IfcPHMeasure|IfcIonConcentrationMeasure> = [];

            for ( let address of stepExtractArray( buffer, cursor, endCursor ) )
            {
                value.push( (() => { 
                    let cursor = address;
        
                    let expressID = stepExtractReference( buffer, cursor, endCursor );
                    let value : StepEntityBase< EntityTypesIfc > | undefined = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )));           
        
                    if ( !( value instanceof IfcVolumeMeasure ) && !( value instanceof IfcTimeMeasure ) && !( value instanceof IfcThermodynamicTemperatureMeasure ) && !( value instanceof IfcSolidAngleMeasure ) && !( value instanceof IfcPositiveRatioMeasure ) && !( value instanceof IfcRatioMeasure ) && !( value instanceof IfcPositivePlaneAngleMeasure ) && !( value instanceof IfcPlaneAngleMeasure ) && !( value instanceof IfcParameterValue ) && !( value instanceof IfcNumericMeasure ) && !( value instanceof IfcMassMeasure ) && !( value instanceof IfcPositiveLengthMeasure ) && !( value instanceof IfcLengthMeasure ) && !( value instanceof IfcElectricCurrentMeasure ) && !( value instanceof IfcDescriptiveMeasure ) && !( value instanceof IfcCountMeasure ) && !( value instanceof IfcContextDependentMeasure ) && !( value instanceof IfcAreaMeasure ) && !( value instanceof IfcAmountOfSubstanceMeasure ) && !( value instanceof IfcLuminousIntensityMeasure ) && !( value instanceof IfcNormalisedRatioMeasure ) && !( value instanceof IfcComplexNumber ) && !( value instanceof IfcInteger ) && !( value instanceof IfcReal ) && !( value instanceof IfcBoolean ) && !( value instanceof IfcIdentifier ) && !( value instanceof IfcText ) && !( value instanceof IfcLabel ) && !( value instanceof IfcLogical ) && !( value instanceof IfcVolumetricFlowRateMeasure ) && !( value instanceof IfcTimeStamp ) && !( value instanceof IfcThermalTransmittanceMeasure ) && !( value instanceof IfcThermalResistanceMeasure ) && !( value instanceof IfcThermalAdmittanceMeasure ) && !( value instanceof IfcPressureMeasure ) && !( value instanceof IfcPowerMeasure ) && !( value instanceof IfcMassFlowRateMeasure ) && !( value instanceof IfcMassDensityMeasure ) && !( value instanceof IfcLinearVelocityMeasure ) && !( value instanceof IfcKinematicViscosityMeasure ) && !( value instanceof IfcIntegerCountRateMeasure ) && !( value instanceof IfcHeatFluxDensityMeasure ) && !( value instanceof IfcFrequencyMeasure ) && !( value instanceof IfcEnergyMeasure ) && !( value instanceof IfcElectricVoltageMeasure ) && !( value instanceof IfcDynamicViscosityMeasure ) && !( value instanceof IfcCompoundPlaneAngleMeasure ) && !( value instanceof IfcAngularVelocityMeasure ) && !( value instanceof IfcThermalConductivityMeasure ) && !( value instanceof IfcMolecularWeightMeasure ) && !( value instanceof IfcVaporPermeabilityMeasure ) && !( value instanceof IfcMoistureDiffusivityMeasure ) && !( value instanceof IfcIsothermalMoistureCapacityMeasure ) && !( value instanceof IfcSpecificHeatCapacityMeasure ) && !( value instanceof IfcMonetaryMeasure ) && !( value instanceof IfcMagneticFluxDensityMeasure ) && !( value instanceof IfcMagneticFluxMeasure ) && !( value instanceof IfcLuminousFluxMeasure ) && !( value instanceof IfcForceMeasure ) && !( value instanceof IfcInductanceMeasure ) && !( value instanceof IfcIlluminanceMeasure ) && !( value instanceof IfcElectricResistanceMeasure ) && !( value instanceof IfcElectricConductanceMeasure ) && !( value instanceof IfcElectricChargeMeasure ) && !( value instanceof IfcDoseEquivalentMeasure ) && !( value instanceof IfcElectricCapacitanceMeasure ) && !( value instanceof IfcAbsorbedDoseMeasure ) && !( value instanceof IfcRadioActivityMeasure ) && !( value instanceof IfcRotationalFrequencyMeasure ) && !( value instanceof IfcTorqueMeasure ) && !( value instanceof IfcAccelerationMeasure ) && !( value instanceof IfcLinearForceMeasure ) && !( value instanceof IfcLinearStiffnessMeasure ) && !( value instanceof IfcModulusOfSubgradeReactionMeasure ) && !( value instanceof IfcModulusOfElasticityMeasure ) && !( value instanceof IfcMomentOfInertiaMeasure ) && !( value instanceof IfcPlanarForceMeasure ) && !( value instanceof IfcRotationalStiffnessMeasure ) && !( value instanceof IfcShearModulusMeasure ) && !( value instanceof IfcLinearMomentMeasure ) && !( value instanceof IfcLuminousIntensityDistributionMeasure ) && !( value instanceof IfcCurvatureMeasure ) && !( value instanceof IfcMassPerLengthMeasure ) && !( value instanceof IfcModulusOfLinearSubgradeReactionMeasure ) && !( value instanceof IfcModulusOfRotationalSubgradeReactionMeasure ) && !( value instanceof IfcRotationalMassMeasure ) && !( value instanceof IfcSectionalAreaIntegralMeasure ) && !( value instanceof IfcSectionModulusMeasure ) && !( value instanceof IfcTemperatureGradientMeasure ) && !( value instanceof IfcThermalExpansionCoefficientMeasure ) && !( value instanceof IfcWarpingConstantMeasure ) && !( value instanceof IfcWarpingMomentMeasure ) && !( value instanceof IfcSoundPowerMeasure ) && !( value instanceof IfcSoundPressureMeasure ) && !( value instanceof IfcHeatingValueMeasure ) && !( value instanceof IfcPHMeasure ) && !( value instanceof IfcIonConcentrationMeasure ) )
                    {                
                        throw new Error( 'Value in STEP was incorrectly typed for field' );
                    }
        
                    return value as (IfcVolumeMeasure | IfcTimeMeasure | IfcThermodynamicTemperatureMeasure | IfcSolidAngleMeasure | IfcPositiveRatioMeasure | IfcRatioMeasure | IfcPositivePlaneAngleMeasure | IfcPlaneAngleMeasure | IfcParameterValue | IfcNumericMeasure | IfcMassMeasure | IfcPositiveLengthMeasure | IfcLengthMeasure | IfcElectricCurrentMeasure | IfcDescriptiveMeasure | IfcCountMeasure | IfcContextDependentMeasure | IfcAreaMeasure | IfcAmountOfSubstanceMeasure | IfcLuminousIntensityMeasure | IfcNormalisedRatioMeasure | IfcComplexNumber | IfcInteger | IfcReal | IfcBoolean | IfcIdentifier | IfcText | IfcLabel | IfcLogical | IfcVolumetricFlowRateMeasure | IfcTimeStamp | IfcThermalTransmittanceMeasure | IfcThermalResistanceMeasure | IfcThermalAdmittanceMeasure | IfcPressureMeasure | IfcPowerMeasure | IfcMassFlowRateMeasure | IfcMassDensityMeasure | IfcLinearVelocityMeasure | IfcKinematicViscosityMeasure | IfcIntegerCountRateMeasure | IfcHeatFluxDensityMeasure | IfcFrequencyMeasure | IfcEnergyMeasure | IfcElectricVoltageMeasure | IfcDynamicViscosityMeasure | IfcCompoundPlaneAngleMeasure | IfcAngularVelocityMeasure | IfcThermalConductivityMeasure | IfcMolecularWeightMeasure | IfcVaporPermeabilityMeasure | IfcMoistureDiffusivityMeasure | IfcIsothermalMoistureCapacityMeasure | IfcSpecificHeatCapacityMeasure | IfcMonetaryMeasure | IfcMagneticFluxDensityMeasure | IfcMagneticFluxMeasure | IfcLuminousFluxMeasure | IfcForceMeasure | IfcInductanceMeasure | IfcIlluminanceMeasure | IfcElectricResistanceMeasure | IfcElectricConductanceMeasure | IfcElectricChargeMeasure | IfcDoseEquivalentMeasure | IfcElectricCapacitanceMeasure | IfcAbsorbedDoseMeasure | IfcRadioActivityMeasure | IfcRotationalFrequencyMeasure | IfcTorqueMeasure | IfcAccelerationMeasure | IfcLinearForceMeasure | IfcLinearStiffnessMeasure | IfcModulusOfSubgradeReactionMeasure | IfcModulusOfElasticityMeasure | IfcMomentOfInertiaMeasure | IfcPlanarForceMeasure | IfcRotationalStiffnessMeasure | IfcShearModulusMeasure | IfcLinearMomentMeasure | IfcLuminousIntensityDistributionMeasure | IfcCurvatureMeasure | IfcMassPerLengthMeasure | IfcModulusOfLinearSubgradeReactionMeasure | IfcModulusOfRotationalSubgradeReactionMeasure | IfcRotationalMassMeasure | IfcSectionalAreaIntegralMeasure | IfcSectionModulusMeasure | IfcTemperatureGradientMeasure | IfcThermalExpansionCoefficientMeasure | IfcWarpingConstantMeasure | IfcWarpingMomentMeasure | IfcSoundPowerMeasure | IfcSoundPressureMeasure | IfcHeatingValueMeasure | IfcPHMeasure | IfcIonConcentrationMeasure);
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

    public get Unit() : IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit | null
    {
        if ( this.Unit_ === void 0 )
        {
            this.Unit_ = (() => { this.guaranteeVTable();

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
            let value : StepEntityBase< EntityTypesIfc > | undefined = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )));           

            if ( !( value instanceof IfcDerivedUnit ) && !( value instanceof IfcNamedUnit ) && !( value instanceof IfcMonetaryUnit ) )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field' );
                }

                return null;                
            }
            else
            {
                return value as (IfcDerivedUnit | IfcNamedUnit | IfcMonetaryUnit);
            } })();
        }

        return this.Unit_ as IfcDerivedUnit|IfcNamedUnit|IfcMonetaryUnit | null;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
