
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcServiceLifeFactorTypeEnum from "./IfcServiceLifeFactorTypeEnum.bldrs"
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
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcservicelifefactor.htm
 */
export default class IfcServiceLifeFactor implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcServiceLifeFactor';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcServiceLifeFactorSpecification = IfcServiceLifeFactorSpecification.instance;

    constructor( public readonly PredefinedType : IfcServiceLifeFactorTypeEnum , public readonly UpperValue : IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber  | undefined, public readonly MostUsedValue : IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber , public readonly LowerValue : IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber  | undefined ) {}
}

export class IfcServiceLifeFactorSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcServiceLifeFactor';

    public readonly required: ReadonlyArray< string > = [ 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcServiceLifeFactorTypeEnum'
		}, 
		{
			name: 'UpperValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber'
		}, 
		{
			name: 'MostUsedValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber'
		}, 
		{
			name: 'LowerValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVolumeMeasure|IfcTimeMeasure|IfcThermodynamicTemperatureMeasure|IfcSolidAngleMeasure|IfcPositiveRatioMeasure|IfcRatioMeasure|IfcPositivePlaneAngleMeasure|IfcPlaneAngleMeasure|IfcParameterValue|IfcNumericMeasure|IfcMassMeasure|IfcPositiveLengthMeasure|IfcLengthMeasure|IfcElectricCurrentMeasure|IfcDescriptiveMeasure|IfcCountMeasure|IfcContextDependentMeasure|IfcAreaMeasure|IfcAmountOfSubstanceMeasure|IfcLuminousIntensityMeasure|IfcNormalisedRatioMeasure|IfcComplexNumber'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcServiceLifeFactorSpecification = new IfcServiceLifeFactorSpecification();
}
