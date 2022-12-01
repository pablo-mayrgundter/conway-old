
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcTendonTypeEnum} from "./IfcTendonTypeEnum.bldrs"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.bldrs"
import {IfcAreaMeasure} from "./IfcAreaMeasure.bldrs"
import {IfcForceMeasure} from "./IfcForceMeasure.bldrs"
import {IfcPressureMeasure} from "./IfcPressureMeasure.bldrs"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctendon.htm
 */
export default class IfcTendon implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcTendon';

    public readonly __version__: number = 0;

	PredefinedType : IfcTendonTypeEnum;
	NominalDiameter : IfcPositiveLengthMeasure;
	CrossSectionArea : IfcAreaMeasure;
	TensionForce? : IfcForceMeasure;
	PreStress? : IfcPressureMeasure;
	FrictionCoefficient? : IfcNormalisedRatioMeasure;
	AnchorageSlip? : IfcPositiveLengthMeasure;
	MinCurvatureRadius? : IfcPositiveLengthMeasure;

}

export class IfcTendonSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcTendon';

    public readonly required: string[] = [ 'IfcReinforcingElement', 'IfcBuildingElementComponent', 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTendonTypeEnum'
		}, 
		{
			name: 'NominalDiameter',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'CrossSectionArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure'
		}, 
		{
			name: 'TensionForce',
			isCollection: false,
			rank: 0,
			baseType: 'IfcForceMeasure'
		}, 
		{
			name: 'PreStress',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPressureMeasure'
		}, 
		{
			name: 'FrictionCoefficient',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'AnchorageSlip',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'MinCurvatureRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}
