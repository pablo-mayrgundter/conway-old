
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure.bldrs"
import {IfcIsothermalMoistureCapacityMeasure} from "./IfcIsothermalMoistureCapacityMeasure.bldrs"
import {IfcVaporPermeabilityMeasure} from "./IfcVaporPermeabilityMeasure.bldrs"
import {IfcMoistureDiffusivityMeasure} from "./IfcMoistureDiffusivityMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifchygroscopicmaterialproperties.htm
 */
export default class IfcHygroscopicMaterialProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcHygroscopicMaterialProperties';

    public readonly __version__: number = 0;

	UpperVaporResistanceFactor? : IfcPositiveRatioMeasure;
	LowerVaporResistanceFactor? : IfcPositiveRatioMeasure;
	IsothermalMoistureCapacity? : IfcIsothermalMoistureCapacityMeasure;
	VaporPermeability? : IfcVaporPermeabilityMeasure;
	MoistureDiffusivity? : IfcMoistureDiffusivityMeasure;

}

export class IfcHygroscopicMaterialPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcHygroscopicMaterialProperties';

    public readonly required: string[] = [ 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'UpperVaporResistanceFactor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'LowerVaporResistanceFactor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'IsothermalMoistureCapacity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIsothermalMoistureCapacityMeasure'
		}, 
		{
			name: 'VaporPermeability',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVaporPermeabilityMeasure'
		}, 
		{
			name: 'MoistureDiffusivity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMoistureDiffusivityMeasure'
		}
    ];
}
