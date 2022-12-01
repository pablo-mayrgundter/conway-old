
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcSpecificHeatCapacityMeasure} from "./IfcSpecificHeatCapacityMeasure.bldrs"
import {IfcPositiveRatioMeasure} from "./IfcPositiveRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproductsofcombustionproperties.htm
 */
export default class IfcProductsOfCombustionProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProductsOfCombustionProperties';

    public readonly __version__: number = 0;

	SpecificHeatCapacity? : IfcSpecificHeatCapacityMeasure;
	N20Content? : IfcPositiveRatioMeasure;
	COContent? : IfcPositiveRatioMeasure;
	CO2Content? : IfcPositiveRatioMeasure;

}

export class IfcProductsOfCombustionPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProductsOfCombustionProperties';

    public readonly required: string[] = [ 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'SpecificHeatCapacity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpecificHeatCapacityMeasure'
		}, 
		{
			name: 'N20Content',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'COContent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'CO2Content',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}
    ];
}
