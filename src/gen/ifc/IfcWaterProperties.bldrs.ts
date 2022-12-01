
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcIonConcentrationMeasure} from "./IfcIonConcentrationMeasure.bldrs"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.bldrs"
import {IfcPHMeasure} from "./IfcPHMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwaterproperties.htm
 */
export default class IfcWaterProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcWaterProperties';

    public readonly __version__: number = 0;

	IsPotable? : boolean;
	Hardness? : IfcIonConcentrationMeasure;
	AlkalinityConcentration? : IfcIonConcentrationMeasure;
	AcidityConcentration? : IfcIonConcentrationMeasure;
	ImpuritiesContent? : IfcNormalisedRatioMeasure;
	PHLevel? : IfcPHMeasure;
	DissolvedSolidsContent? : IfcNormalisedRatioMeasure;

}

export class IfcWaterPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcWaterProperties';

    public readonly required: string[] = [ 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'IsPotable',
			isCollection: false,
			rank: 0,
			baseType: 'boolean'
		}, 
		{
			name: 'Hardness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIonConcentrationMeasure'
		}, 
		{
			name: 'AlkalinityConcentration',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIonConcentrationMeasure'
		}, 
		{
			name: 'AcidityConcentration',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIonConcentrationMeasure'
		}, 
		{
			name: 'ImpuritiesContent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'PHLevel',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPHMeasure'
		}, 
		{
			name: 'DissolvedSolidsContent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}
    ];
}
