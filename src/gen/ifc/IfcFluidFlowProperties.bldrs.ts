
import { IfcPropertySetDefinition } from "./index"
import { IfcPropertySourceEnum, IfcPropertySourceEnumDeserializeStep } from "./index"
import { IfcTimeSeries } from "./index"
import { IfcMaterial } from "./index"
import { IfcLabel } from "./index"
import { IfcThermodynamicTemperatureMeasure } from "./index"
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
import { IfcPositiveRatioMeasure } from "./index"

import EntityTypesIfc from "./entity_types_ifc.bldrs"
import StepEntityInternalReference from "../../core/step_entity_internal_reference"
import StepEntityBase from "../../core/step_entity_base"
import StepModelBase from "../../core/step_model_base"
import {stepExtractBoolean, stepExtractEnum, stepExtractString, stepExtractOptional, stepExtractBinary, stepExtractReference, stepExtractNumber, stepExtractInlineElemement, stepExtractArray, NVL, HIINDEX, SIZEOF} from '../../../dependencies/conway-ds/src/parsing/step/step_deserialization_functions';
import {IfcBaseAxis, IfcBooleanChoose, IfcBuild2Axes, IfcBuildAxes, IfcConstraintsParamBSpline, IfcConvertDirectionInto2D, IfcCorrectDimensions, IfcCorrectFillAreaStyle, IfcCorrectLocalPlacement, IfcCorrectObjectAssignment, IfcCorrectUnitAssignment, IfcCrossProduct, IfcCurveDim, IfcDeriveDimensionalExponents, IfcDimensionsForSiUnit, IfcDotProduct, IfcFirstProjAxis, IfcListToArray, IfcLoopHeadToTail, IfcMakeArrayOfArray, IfcMlsTotalThickness, IfcNormalise, IfcOrthogonalComplement, IfcPathHeadToTail, IfcSameAxis2Placement, IfcSameCartesianPoint, IfcSameDirection, IfcSameValidPrecision, IfcSameValue, IfcScalarTimesVector, IfcSecondProjAxis, IfcShapeRepresentationTypes, IfcTaperedSweptAreaProfiles, IfcTopologyRepresentationTypes, IfcUniqueDefinitionNames, IfcUniquePropertyName, IfcUniquePropertySetNames, IfcUniqueQuantityNames, IfcVectorDifference, IfcVectorSum } from "../../core/ifc/ifc_functions"

///**
// * http://www.buildingsmart-tech.org/ifc/ifc4/final/html/link/ifcfluidflowproperties.htm */
export  class IfcFluidFlowProperties extends IfcPropertySetDefinition 
{    
    public get type(): EntityTypesIfc
    {
        return EntityTypesIfc.IFCFLUIDFLOWPROPERTIES;
    }

    private PropertySource_? : IfcPropertySourceEnum;
    private FlowConditionTimeSeries_? : IfcTimeSeries | null;
    private VelocityTimeSeries_? : IfcTimeSeries | null;
    private FlowrateTimeSeries_? : IfcTimeSeries | null;
    private Fluid_? : IfcMaterial;
    private PressureTimeSeries_? : IfcTimeSeries | null;
    private UserDefinedPropertySource_? : string | null;
    private TemperatureSingleValue_? : number | null;
    private WetBulbTemperatureSingleValue_? : number | null;
    private WetBulbTemperatureTimeSeries_? : IfcTimeSeries | null;
    private TemperatureTimeSeries_? : IfcTimeSeries | null;
    private FlowrateSingleValue_? : IfcVolumetricFlowRateMeasure|IfcTimeStamp|IfcThermalTransmittanceMeasure|IfcThermalResistanceMeasure|IfcThermalAdmittanceMeasure|IfcPressureMeasure|IfcPowerMeasure|IfcMassFlowRateMeasure|IfcMassDensityMeasure|IfcLinearVelocityMeasure|IfcKinematicViscosityMeasure|IfcIntegerCountRateMeasure|IfcHeatFluxDensityMeasure|IfcFrequencyMeasure|IfcEnergyMeasure|IfcElectricVoltageMeasure|IfcDynamicViscosityMeasure|IfcCompoundPlaneAngleMeasure|IfcAngularVelocityMeasure|IfcThermalConductivityMeasure|IfcMolecularWeightMeasure|IfcVaporPermeabilityMeasure|IfcMoistureDiffusivityMeasure|IfcIsothermalMoistureCapacityMeasure|IfcSpecificHeatCapacityMeasure|IfcMonetaryMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcLuminousFluxMeasure|IfcForceMeasure|IfcInductanceMeasure|IfcIlluminanceMeasure|IfcElectricResistanceMeasure|IfcElectricConductanceMeasure|IfcElectricChargeMeasure|IfcDoseEquivalentMeasure|IfcElectricCapacitanceMeasure|IfcAbsorbedDoseMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcTorqueMeasure|IfcAccelerationMeasure|IfcLinearForceMeasure|IfcLinearStiffnessMeasure|IfcModulusOfSubgradeReactionMeasure|IfcModulusOfElasticityMeasure|IfcMomentOfInertiaMeasure|IfcPlanarForceMeasure|IfcRotationalStiffnessMeasure|IfcShearModulusMeasure|IfcLinearMomentMeasure|IfcLuminousIntensityDistributionMeasure|IfcCurvatureMeasure|IfcMassPerLengthMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcRotationalMassMeasure|IfcSectionalAreaIntegralMeasure|IfcSectionModulusMeasure|IfcTemperatureGradientMeasure|IfcThermalExpansionCoefficientMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcSoundPowerMeasure|IfcSoundPressureMeasure|IfcHeatingValueMeasure|IfcPHMeasure|IfcIonConcentrationMeasure | null;
    private FlowConditionSingleValue_? : number | null;
    private VelocitySingleValue_? : number | null;
    private PressureSingleValue_? : number | null;

    public get PropertySource() : IfcPropertySourceEnum
    {
        if ( this.PropertySource_ === void 0 )
        {
            this.PropertySource_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 4 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 4;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = IfcPropertySourceEnumDeserializeStep( buffer, cursor, endCursor );

            if ( value === void 0 )
            {                
                throw new Error( 'Value in STEP was incorrectly typed' );
            };

            return value; })();
        }

        return this.PropertySource_ as IfcPropertySourceEnum;
    }

    public get FlowConditionTimeSeries() : IfcTimeSeries | null
    {
        if ( this.FlowConditionTimeSeries_ === void 0 )
        {
            this.FlowConditionTimeSeries_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 5 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 5;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let expressID = stepExtractReference( buffer, cursor, endCursor );
            let value = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           

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

        return this.FlowConditionTimeSeries_ as IfcTimeSeries | null;
    }

    public get VelocityTimeSeries() : IfcTimeSeries | null
    {
        if ( this.VelocityTimeSeries_ === void 0 )
        {
            this.VelocityTimeSeries_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 6 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 6;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let expressID = stepExtractReference( buffer, cursor, endCursor );
            let value = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           

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

        return this.VelocityTimeSeries_ as IfcTimeSeries | null;
    }

    public get FlowrateTimeSeries() : IfcTimeSeries | null
    {
        if ( this.FlowrateTimeSeries_ === void 0 )
        {
            this.FlowrateTimeSeries_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 7 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 7;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let expressID = stepExtractReference( buffer, cursor, endCursor );
            let value = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           

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

        return this.FlowrateTimeSeries_ as IfcTimeSeries | null;
    }

    public get Fluid() : IfcMaterial
    {
        if ( this.Fluid_ === void 0 )
        {
            this.Fluid_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 8 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 8;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let expressID = stepExtractReference( buffer, cursor, endCursor );
            let value = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           

            if ( !( value instanceof IfcMaterial ) )
            {                
                throw new Error( 'Value in STEP was incorrectly typed for field' );
            };

            return value; })();
        }

        return this.Fluid_ as IfcMaterial;
    }

    public get PressureTimeSeries() : IfcTimeSeries | null
    {
        if ( this.PressureTimeSeries_ === void 0 )
        {
            this.PressureTimeSeries_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 9 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 9;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let expressID = stepExtractReference( buffer, cursor, endCursor );
            let value = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           

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

        return this.PressureTimeSeries_ as IfcTimeSeries | null;
    }

    public get UserDefinedPropertySource() : string | null
    {
        if ( this.UserDefinedPropertySource_ === void 0 )
        {
            this.UserDefinedPropertySource_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 10 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 10;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractString( buffer, cursor, endCursor );

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

        return this.UserDefinedPropertySource_ as string | null;
    }

    public get TemperatureSingleValue() : number | null
    {
        if ( this.TemperatureSingleValue_ === void 0 )
        {
            this.TemperatureSingleValue_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 11 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 11;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

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

        return this.TemperatureSingleValue_ as number | null;
    }

    public get WetBulbTemperatureSingleValue() : number | null
    {
        if ( this.WetBulbTemperatureSingleValue_ === void 0 )
        {
            this.WetBulbTemperatureSingleValue_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 12 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 12;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

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

        return this.WetBulbTemperatureSingleValue_ as number | null;
    }

    public get WetBulbTemperatureTimeSeries() : IfcTimeSeries | null
    {
        if ( this.WetBulbTemperatureTimeSeries_ === void 0 )
        {
            this.WetBulbTemperatureTimeSeries_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 13 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 13;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let expressID = stepExtractReference( buffer, cursor, endCursor );
            let value = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           

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

        return this.WetBulbTemperatureTimeSeries_ as IfcTimeSeries | null;
    }

    public get TemperatureTimeSeries() : IfcTimeSeries | null
    {
        if ( this.TemperatureTimeSeries_ === void 0 )
        {
            this.TemperatureTimeSeries_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 14 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 14;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let expressID = stepExtractReference( buffer, cursor, endCursor );
            let value = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor ) );           

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

        return this.TemperatureTimeSeries_ as IfcTimeSeries | null;
    }

    public get FlowrateSingleValue() : IfcVolumetricFlowRateMeasure|IfcTimeStamp|IfcThermalTransmittanceMeasure|IfcThermalResistanceMeasure|IfcThermalAdmittanceMeasure|IfcPressureMeasure|IfcPowerMeasure|IfcMassFlowRateMeasure|IfcMassDensityMeasure|IfcLinearVelocityMeasure|IfcKinematicViscosityMeasure|IfcIntegerCountRateMeasure|IfcHeatFluxDensityMeasure|IfcFrequencyMeasure|IfcEnergyMeasure|IfcElectricVoltageMeasure|IfcDynamicViscosityMeasure|IfcCompoundPlaneAngleMeasure|IfcAngularVelocityMeasure|IfcThermalConductivityMeasure|IfcMolecularWeightMeasure|IfcVaporPermeabilityMeasure|IfcMoistureDiffusivityMeasure|IfcIsothermalMoistureCapacityMeasure|IfcSpecificHeatCapacityMeasure|IfcMonetaryMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcLuminousFluxMeasure|IfcForceMeasure|IfcInductanceMeasure|IfcIlluminanceMeasure|IfcElectricResistanceMeasure|IfcElectricConductanceMeasure|IfcElectricChargeMeasure|IfcDoseEquivalentMeasure|IfcElectricCapacitanceMeasure|IfcAbsorbedDoseMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcTorqueMeasure|IfcAccelerationMeasure|IfcLinearForceMeasure|IfcLinearStiffnessMeasure|IfcModulusOfSubgradeReactionMeasure|IfcModulusOfElasticityMeasure|IfcMomentOfInertiaMeasure|IfcPlanarForceMeasure|IfcRotationalStiffnessMeasure|IfcShearModulusMeasure|IfcLinearMomentMeasure|IfcLuminousIntensityDistributionMeasure|IfcCurvatureMeasure|IfcMassPerLengthMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcRotationalMassMeasure|IfcSectionalAreaIntegralMeasure|IfcSectionModulusMeasure|IfcTemperatureGradientMeasure|IfcThermalExpansionCoefficientMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcSoundPowerMeasure|IfcSoundPressureMeasure|IfcHeatingValueMeasure|IfcPHMeasure|IfcIonConcentrationMeasure | null
    {
        if ( this.FlowrateSingleValue_ === void 0 )
        {
            this.FlowrateSingleValue_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 15 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 15;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let expressID = stepExtractReference( buffer, cursor, endCursor );
            let value : StepEntityBase< EntityTypesIfc > | undefined = expressID !== void 0 ? this.model.getElementByExpressID( expressID ) : (this.model.getInlineElementByAddress( stepExtractInlineElemement( buffer, cursor, endCursor )));           

            if ( !( value instanceof IfcVolumetricFlowRateMeasure ) && !( value instanceof IfcTimeStamp ) && !( value instanceof IfcThermalTransmittanceMeasure ) && !( value instanceof IfcThermalResistanceMeasure ) && !( value instanceof IfcThermalAdmittanceMeasure ) && !( value instanceof IfcPressureMeasure ) && !( value instanceof IfcPowerMeasure ) && !( value instanceof IfcMassFlowRateMeasure ) && !( value instanceof IfcMassDensityMeasure ) && !( value instanceof IfcLinearVelocityMeasure ) && !( value instanceof IfcKinematicViscosityMeasure ) && !( value instanceof IfcIntegerCountRateMeasure ) && !( value instanceof IfcHeatFluxDensityMeasure ) && !( value instanceof IfcFrequencyMeasure ) && !( value instanceof IfcEnergyMeasure ) && !( value instanceof IfcElectricVoltageMeasure ) && !( value instanceof IfcDynamicViscosityMeasure ) && !( value instanceof IfcCompoundPlaneAngleMeasure ) && !( value instanceof IfcAngularVelocityMeasure ) && !( value instanceof IfcThermalConductivityMeasure ) && !( value instanceof IfcMolecularWeightMeasure ) && !( value instanceof IfcVaporPermeabilityMeasure ) && !( value instanceof IfcMoistureDiffusivityMeasure ) && !( value instanceof IfcIsothermalMoistureCapacityMeasure ) && !( value instanceof IfcSpecificHeatCapacityMeasure ) && !( value instanceof IfcMonetaryMeasure ) && !( value instanceof IfcMagneticFluxDensityMeasure ) && !( value instanceof IfcMagneticFluxMeasure ) && !( value instanceof IfcLuminousFluxMeasure ) && !( value instanceof IfcForceMeasure ) && !( value instanceof IfcInductanceMeasure ) && !( value instanceof IfcIlluminanceMeasure ) && !( value instanceof IfcElectricResistanceMeasure ) && !( value instanceof IfcElectricConductanceMeasure ) && !( value instanceof IfcElectricChargeMeasure ) && !( value instanceof IfcDoseEquivalentMeasure ) && !( value instanceof IfcElectricCapacitanceMeasure ) && !( value instanceof IfcAbsorbedDoseMeasure ) && !( value instanceof IfcRadioActivityMeasure ) && !( value instanceof IfcRotationalFrequencyMeasure ) && !( value instanceof IfcTorqueMeasure ) && !( value instanceof IfcAccelerationMeasure ) && !( value instanceof IfcLinearForceMeasure ) && !( value instanceof IfcLinearStiffnessMeasure ) && !( value instanceof IfcModulusOfSubgradeReactionMeasure ) && !( value instanceof IfcModulusOfElasticityMeasure ) && !( value instanceof IfcMomentOfInertiaMeasure ) && !( value instanceof IfcPlanarForceMeasure ) && !( value instanceof IfcRotationalStiffnessMeasure ) && !( value instanceof IfcShearModulusMeasure ) && !( value instanceof IfcLinearMomentMeasure ) && !( value instanceof IfcLuminousIntensityDistributionMeasure ) && !( value instanceof IfcCurvatureMeasure ) && !( value instanceof IfcMassPerLengthMeasure ) && !( value instanceof IfcModulusOfLinearSubgradeReactionMeasure ) && !( value instanceof IfcModulusOfRotationalSubgradeReactionMeasure ) && !( value instanceof IfcRotationalMassMeasure ) && !( value instanceof IfcSectionalAreaIntegralMeasure ) && !( value instanceof IfcSectionModulusMeasure ) && !( value instanceof IfcTemperatureGradientMeasure ) && !( value instanceof IfcThermalExpansionCoefficientMeasure ) && !( value instanceof IfcWarpingConstantMeasure ) && !( value instanceof IfcWarpingMomentMeasure ) && !( value instanceof IfcSoundPowerMeasure ) && !( value instanceof IfcSoundPressureMeasure ) && !( value instanceof IfcHeatingValueMeasure ) && !( value instanceof IfcPHMeasure ) && !( value instanceof IfcIonConcentrationMeasure ) )
            {
                if ( stepExtractOptional( buffer, cursor, endCursor ) !== null )
                {
                    throw new Error( 'Value in STEP was incorrectly typed for field' );
                }

                return null;                
            }
            else
            {
                return value as (IfcVolumetricFlowRateMeasure | IfcTimeStamp | IfcThermalTransmittanceMeasure | IfcThermalResistanceMeasure | IfcThermalAdmittanceMeasure | IfcPressureMeasure | IfcPowerMeasure | IfcMassFlowRateMeasure | IfcMassDensityMeasure | IfcLinearVelocityMeasure | IfcKinematicViscosityMeasure | IfcIntegerCountRateMeasure | IfcHeatFluxDensityMeasure | IfcFrequencyMeasure | IfcEnergyMeasure | IfcElectricVoltageMeasure | IfcDynamicViscosityMeasure | IfcCompoundPlaneAngleMeasure | IfcAngularVelocityMeasure | IfcThermalConductivityMeasure | IfcMolecularWeightMeasure | IfcVaporPermeabilityMeasure | IfcMoistureDiffusivityMeasure | IfcIsothermalMoistureCapacityMeasure | IfcSpecificHeatCapacityMeasure | IfcMonetaryMeasure | IfcMagneticFluxDensityMeasure | IfcMagneticFluxMeasure | IfcLuminousFluxMeasure | IfcForceMeasure | IfcInductanceMeasure | IfcIlluminanceMeasure | IfcElectricResistanceMeasure | IfcElectricConductanceMeasure | IfcElectricChargeMeasure | IfcDoseEquivalentMeasure | IfcElectricCapacitanceMeasure | IfcAbsorbedDoseMeasure | IfcRadioActivityMeasure | IfcRotationalFrequencyMeasure | IfcTorqueMeasure | IfcAccelerationMeasure | IfcLinearForceMeasure | IfcLinearStiffnessMeasure | IfcModulusOfSubgradeReactionMeasure | IfcModulusOfElasticityMeasure | IfcMomentOfInertiaMeasure | IfcPlanarForceMeasure | IfcRotationalStiffnessMeasure | IfcShearModulusMeasure | IfcLinearMomentMeasure | IfcLuminousIntensityDistributionMeasure | IfcCurvatureMeasure | IfcMassPerLengthMeasure | IfcModulusOfLinearSubgradeReactionMeasure | IfcModulusOfRotationalSubgradeReactionMeasure | IfcRotationalMassMeasure | IfcSectionalAreaIntegralMeasure | IfcSectionModulusMeasure | IfcTemperatureGradientMeasure | IfcThermalExpansionCoefficientMeasure | IfcWarpingConstantMeasure | IfcWarpingMomentMeasure | IfcSoundPowerMeasure | IfcSoundPressureMeasure | IfcHeatingValueMeasure | IfcPHMeasure | IfcIonConcentrationMeasure);
            } })();
        }

        return this.FlowrateSingleValue_ as IfcVolumetricFlowRateMeasure|IfcTimeStamp|IfcThermalTransmittanceMeasure|IfcThermalResistanceMeasure|IfcThermalAdmittanceMeasure|IfcPressureMeasure|IfcPowerMeasure|IfcMassFlowRateMeasure|IfcMassDensityMeasure|IfcLinearVelocityMeasure|IfcKinematicViscosityMeasure|IfcIntegerCountRateMeasure|IfcHeatFluxDensityMeasure|IfcFrequencyMeasure|IfcEnergyMeasure|IfcElectricVoltageMeasure|IfcDynamicViscosityMeasure|IfcCompoundPlaneAngleMeasure|IfcAngularVelocityMeasure|IfcThermalConductivityMeasure|IfcMolecularWeightMeasure|IfcVaporPermeabilityMeasure|IfcMoistureDiffusivityMeasure|IfcIsothermalMoistureCapacityMeasure|IfcSpecificHeatCapacityMeasure|IfcMonetaryMeasure|IfcMagneticFluxDensityMeasure|IfcMagneticFluxMeasure|IfcLuminousFluxMeasure|IfcForceMeasure|IfcInductanceMeasure|IfcIlluminanceMeasure|IfcElectricResistanceMeasure|IfcElectricConductanceMeasure|IfcElectricChargeMeasure|IfcDoseEquivalentMeasure|IfcElectricCapacitanceMeasure|IfcAbsorbedDoseMeasure|IfcRadioActivityMeasure|IfcRotationalFrequencyMeasure|IfcTorqueMeasure|IfcAccelerationMeasure|IfcLinearForceMeasure|IfcLinearStiffnessMeasure|IfcModulusOfSubgradeReactionMeasure|IfcModulusOfElasticityMeasure|IfcMomentOfInertiaMeasure|IfcPlanarForceMeasure|IfcRotationalStiffnessMeasure|IfcShearModulusMeasure|IfcLinearMomentMeasure|IfcLuminousIntensityDistributionMeasure|IfcCurvatureMeasure|IfcMassPerLengthMeasure|IfcModulusOfLinearSubgradeReactionMeasure|IfcModulusOfRotationalSubgradeReactionMeasure|IfcRotationalMassMeasure|IfcSectionalAreaIntegralMeasure|IfcSectionModulusMeasure|IfcTemperatureGradientMeasure|IfcThermalExpansionCoefficientMeasure|IfcWarpingConstantMeasure|IfcWarpingMomentMeasure|IfcSoundPowerMeasure|IfcSoundPressureMeasure|IfcHeatingValueMeasure|IfcPHMeasure|IfcIonConcentrationMeasure | null;
    }

    public get FlowConditionSingleValue() : number | null
    {
        if ( this.FlowConditionSingleValue_ === void 0 )
        {
            this.FlowConditionSingleValue_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 16 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 16;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

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

        return this.FlowConditionSingleValue_ as number | null;
    }

    public get VelocitySingleValue() : number | null
    {
        if ( this.VelocitySingleValue_ === void 0 )
        {
            this.VelocitySingleValue_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 17 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 17;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

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

        return this.VelocitySingleValue_ as number | null;
    }

    public get PressureSingleValue() : number | null
    {
        if ( this.PressureSingleValue_ === void 0 )
        {
            this.PressureSingleValue_ = (() => { this.guaranteeVTable();

            let internalReference = this.internalReference_ as Required< StepEntityInternalReference< EntityTypesIfc > >;

            if ( 18 >= internalReference.vtableCount )
            {
                throw new Error( "Couldn't read field due to too few fields in record" ); 
            }
            
            let vtableSlot = internalReference.vtableIndex + 18;

            let cursor    = internalReference.vtable[ vtableSlot ];
            let buffer    = internalReference.buffer;
            let endCursor = buffer.length;

            let value = stepExtractNumber( buffer, cursor, endCursor );

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

        return this.PressureSingleValue_ as number | null;
    }
    constructor(localID: number, internalReference: StepEntityInternalReference< EntityTypesIfc >, model: StepModelBase< EntityTypesIfc, StepEntityBase< EntityTypesIfc > > )
    {
        super( localID, internalReference, model );
    }
}
