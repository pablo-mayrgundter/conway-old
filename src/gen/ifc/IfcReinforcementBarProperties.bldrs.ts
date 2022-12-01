
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcAreaMeasure} from "./IfcAreaMeasure.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"
import {IfcReinforcingBarSurfaceEnum} from "./IfcReinforcingBarSurfaceEnum.bldrs"
import {IfcLengthMeasure} from "./IfcLengthMeasure.bldrs"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.bldrs"
import {IfcCountMeasure} from "./IfcCountMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcementbarproperties.htm
 */
export default class IfcReinforcementBarProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcReinforcementBarProperties';

    public readonly __version__: number = 0;

	TotalCrossSectionArea : IfcAreaMeasure;
	SteelGrade : IfcLabel;
	BarSurface? : IfcReinforcingBarSurfaceEnum;
	EffectiveDepth? : IfcLengthMeasure;
	NominalBarDiameter? : IfcPositiveLengthMeasure;
	BarCount? : IfcCountMeasure;

}

export class IfcReinforcementBarPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcReinforcementBarProperties';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'TotalCrossSectionArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure'
		}, 
		{
			name: 'SteelGrade',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'BarSurface',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReinforcingBarSurfaceEnum'
		}, 
		{
			name: 'EffectiveDepth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure'
		}, 
		{
			name: 'NominalBarDiameter',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'BarCount',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCountMeasure'
		}
    ];
}
