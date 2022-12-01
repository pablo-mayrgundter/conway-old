
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcDynamicViscosityMeasure} from "./IfcDynamicViscosityMeasure.bldrs"
import {IfcModulusOfElasticityMeasure} from "./IfcModulusOfElasticityMeasure.bldrs"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure.bldrs"
import {IfcThermalExpansionCoefficientMeasure} from "./IfcThermalExpansionCoefficientMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmechanicalmaterialproperties.htm
 */
export default class IfcMechanicalMaterialProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMechanicalMaterialProperties';

    public readonly __version__: number = 0;

	DynamicViscosity? : IfcDynamicViscosityMeasure;
	YoungModulus? : IfcModulusOfElasticityMeasure;
	ShearModulus? : IfcModulusOfElasticityMeasure;
	PoissonRatio? : IfcPositiveRatioMeasure;
	ThermalExpansionCoefficient? : IfcThermalExpansionCoefficientMeasure;

}

export class IfcMechanicalMaterialPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMechanicalMaterialProperties';

    public readonly required: string[] = [ 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'DynamicViscosity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDynamicViscosityMeasure'
		}, 
		{
			name: 'YoungModulus',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfElasticityMeasure'
		}, 
		{
			name: 'ShearModulus',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfElasticityMeasure'
		}, 
		{
			name: 'PoissonRatio',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'ThermalExpansionCoefficient',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermalExpansionCoefficientMeasure'
		}
    ];
}
