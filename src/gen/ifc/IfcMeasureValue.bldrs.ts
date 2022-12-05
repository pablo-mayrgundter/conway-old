
import IfcVolumeMeasure from "./IfcVolumeMeasure.bldrs"
import IfcTimeMeasure from "./IfcTimeMeasure.bldrs"
import IfcThermodynamicTemperatureMeasure from "./IfcThermodynamicTemperatureMeasure.bldrs"
import IfcSolidAngleMeasure from "./IfcSolidAngleMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcRatioMeasure from "./IfcRatioMeasure.bldrs"
import IfcPositivePlaneAngleMeasure from "./IfcPositivePlaneAngleMeasure.bldrs"
import IfcPlaneAngleMeasure from "./IfcPlaneAngleMeasure.bldrs"
import IfcParameterValue from "./IfcParameterValue.bldrs"
import IfcNumericMeasure from "./IfcNumericMeasure.bldrs"
import IfcMassMeasure from "./IfcMassMeasure.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcElectricCurrentMeasure from "./IfcElectricCurrentMeasure.bldrs"
import IfcDescriptiveMeasure from "./IfcDescriptiveMeasure.bldrs"
import IfcCountMeasure from "./IfcCountMeasure.bldrs"
import IfcContextDependentMeasure from "./IfcContextDependentMeasure.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"
import IfcAmountOfSubstanceMeasure from "./IfcAmountOfSubstanceMeasure.bldrs"
import IfcLuminousIntensityMeasure from "./IfcLuminousIntensityMeasure.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"
import IfcComplexNumber from "./IfcComplexNumber.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmeasurevalue.htm
 */

export default class IfcMeasureValue
{
    public readonly __version__: number = 0;

    constructor( public readonly value: IfcMeasureValueVariant ) {}
}

export type IfcMeasureValueType = 'IfcVolumeMeasure'|'IfcTimeMeasure'|'IfcThermodynamicTemperatureMeasure'|'IfcSolidAngleMeasure'|'IfcPositiveRatioMeasure'|'IfcRatioMeasure'|'IfcPositivePlaneAngleMeasure'|'IfcPlaneAngleMeasure'|'IfcParameterValue'|'IfcNumericMeasure'|'IfcMassMeasure'|'IfcPositiveLengthMeasure'|'IfcLengthMeasure'|'IfcElectricCurrentMeasure'|'IfcDescriptiveMeasure'|'IfcCountMeasure'|'IfcContextDependentMeasure'|'IfcAreaMeasure'|'IfcAmountOfSubstanceMeasure'|'IfcLuminousIntensityMeasure'|'IfcNormalisedRatioMeasure'|'IfcComplexNumber';

export type IfcMeasureValueChoices = IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber;

export type IfcMeasureValueVariant = ({ type: 'IfcVolumeMeasure'; value: IfcVolumeMeasure }|{ type: 'IfcTimeMeasure'; value: IfcTimeMeasure }|{ type: 'IfcThermodynamicTemperatureMeasure'; value: IfcThermodynamicTemperatureMeasure }|{ type: 'IfcSolidAngleMeasure'; value: IfcSolidAngleMeasure }|{ type: 'IfcPositiveRatioMeasure'; value: IfcPositiveRatioMeasure }|{ type: 'IfcRatioMeasure'; value: IfcRatioMeasure }|{ type: 'IfcPositivePlaneAngleMeasure'; value: IfcPositivePlaneAngleMeasure }|{ type: 'IfcPlaneAngleMeasure'; value: IfcPlaneAngleMeasure }|{ type: 'IfcParameterValue'; value: IfcParameterValue }|{ type: 'IfcNumericMeasure'; value: IfcNumericMeasure }|{ type: 'IfcMassMeasure'; value: IfcMassMeasure }|{ type: 'IfcPositiveLengthMeasure'; value: IfcPositiveLengthMeasure }|{ type: 'IfcLengthMeasure'; value: IfcLengthMeasure }|{ type: 'IfcElectricCurrentMeasure'; value: IfcElectricCurrentMeasure }|{ type: 'IfcDescriptiveMeasure'; value: IfcDescriptiveMeasure }|{ type: 'IfcCountMeasure'; value: IfcCountMeasure }|{ type: 'IfcContextDependentMeasure'; value: IfcContextDependentMeasure }|{ type: 'IfcAreaMeasure'; value: IfcAreaMeasure }|{ type: 'IfcAmountOfSubstanceMeasure'; value: IfcAmountOfSubstanceMeasure }|{ type: 'IfcLuminousIntensityMeasure'; value: IfcLuminousIntensityMeasure }|{ type: 'IfcNormalisedRatioMeasure'; value: IfcNormalisedRatioMeasure }|{ type: 'IfcComplexNumber'; value: IfcComplexNumber }) & { type: IfcMeasureValueType; value: IfcMeasureValueChoices };

