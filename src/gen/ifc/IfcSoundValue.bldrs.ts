
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcTimeSeries from "./IfcTimeSeries.bldrs"
import IfcFrequencyMeasure from "./IfcFrequencyMeasure.bldrs"
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


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsoundvalue.htm
 */
export default class IfcSoundValue implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcSoundValue';

    public readonly __version__: number = 0;

    constructor( public readonly SoundLevelTimeSeries : IfcTimeSeries  | undefined, public readonly Frequency : IfcFrequencyMeasure , public readonly SoundLevelSingleValue : IfcVolumetricFlowRateMeasure|IfcTimeStamp|IfcThermalTransmittanceMeasure|IfcThermalResistanceMeasure|IfcThermalAdmittanceMeasure|IfcPressureMeasure|IfcPowerMeasure|IfcMassFlowRateMeasure|IfcMassDensityMeasure|IfcLinearVelocityMeasure|IfcKinematicViscosityMeasure|IfcIntegerCountRateMeasure|IfcHeatFluxDensityMeasure|IfcFrequencyMeasure|IfcEnergyMeasure|IfcElectricVoltageMeasure|IfcDynamicViscosityMeasure|IfcCompoundPlaneAngleMeasure|IfcAngularVelocityMeasure|IfcThermalConductivityMeasure|IfcMolecularWeightMeasure|IfcVaporPermeabilityMeasure|IfcMoistureDiffusivityMeasure|IfcIsothermalMoistureCapacityMeasure|IfcSpecificHeatCapacityMeasure|IfcMonetaryMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcLuminousFluxMeasure|IfcForceMeasure|IfcInductanceMeasure|IfcIlluminanceMeasure|IfcElectricResistanceMeasure|IfcElectricConductanceMeasure|IfcElectricChargeMeasure|IfcDoseEquivalentMeasure|IfcElectricCapacitanceMeasure|IfcAbsorbedDoseMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcTorqueMeasure|IfcAccelerationMeasure|IfcLinearForceMeasure|IfcLinearStiffnessMeasure|IfcModulusOfSubgradeReactionMeasure|IfcModulusOfElasticityMeasure|IfcMomentOfInertiaMeasure|IfcPlanarForceMeasure|IfcRotationalStiffnessMeasure|IfcShearModulusMeasure|IfcLinearMomentMeasure|IfcLuminousIntensityDistributionMeasure|IfcCurvatureMeasure|IfcMassPerLengthMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcRotationalMassMeasure|IfcSectionalAreaIntegralMeasure|IfcSectionModulusMeasure|IfcTemperatureGradientMeasure|IfcThermalExpansionCoefficientMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcSoundPowerMeasure|IfcSoundPressureMeasure|IfcHeatingValueMeasure|IfcPHMeasure|IfcIonConcentrationMeasure  | undefined ) {}
}

export class IfcSoundValueSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSoundValue';

    public readonly required: string[] = [ 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'SoundLevelTimeSeries',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeSeries'
		}, 
		{
			name: 'Frequency',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFrequencyMeasure'
		}, 
		{
			name: 'SoundLevelSingleValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVolumetricFlowRateMeasure|IfcTimeStamp|IfcThermalTransmittanceMeasure|IfcThermalResistanceMeasure|IfcThermalAdmittanceMeasure|IfcPressureMeasure|IfcPowerMeasure|IfcMassFlowRateMeasure|IfcMassDensityMeasure|IfcLinearVelocityMeasure|IfcKinematicViscosityMeasure|IfcIntegerCountRateMeasure|IfcHeatFluxDensityMeasure|IfcFrequencyMeasure|IfcEnergyMeasure|IfcElectricVoltageMeasure|IfcDynamicViscosityMeasure|IfcCompoundPlaneAngleMeasure|IfcAngularVelocityMeasure|IfcThermalConductivityMeasure|IfcMolecularWeightMeasure|IfcVaporPermeabilityMeasure|IfcMoistureDiffusivityMeasure|IfcIsothermalMoistureCapacityMeasure|IfcSpecificHeatCapacityMeasure|IfcMonetaryMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcLuminousFluxMeasure|IfcForceMeasure|IfcInductanceMeasure|IfcIlluminanceMeasure|IfcElectricResistanceMeasure|IfcElectricConductanceMeasure|IfcElectricChargeMeasure|IfcDoseEquivalentMeasure|IfcElectricCapacitanceMeasure|IfcAbsorbedDoseMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcTorqueMeasure|IfcAccelerationMeasure|IfcLinearForceMeasure|IfcLinearStiffnessMeasure|IfcModulusOfSubgradeReactionMeasure|IfcModulusOfElasticityMeasure|IfcMomentOfInertiaMeasure|IfcPlanarForceMeasure|IfcRotationalStiffnessMeasure|IfcShearModulusMeasure|IfcLinearMomentMeasure|IfcLuminousIntensityDistributionMeasure|IfcCurvatureMeasure|IfcMassPerLengthMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcRotationalMassMeasure|IfcSectionalAreaIntegralMeasure|IfcSectionModulusMeasure|IfcTemperatureGradientMeasure|IfcThermalExpansionCoefficientMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcSoundPowerMeasure|IfcSoundPressureMeasure|IfcHeatingValueMeasure|IfcPHMeasure|IfcIonConcentrationMeasure'
		}
    ];
}
