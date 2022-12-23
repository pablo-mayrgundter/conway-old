
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSpecificHeatCapacityMeasure from "./IfcSpecificHeatCapacityMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproductsofcombustionproperties.htm
 */
export default class IfcProductsOfCombustionProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcProductsOfCombustionProperties';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcProductsOfCombustionPropertiesSpecification = IfcProductsOfCombustionPropertiesSpecification.instance;

    constructor( public readonly SpecificHeatCapacity : IfcSpecificHeatCapacityMeasure  | undefined, public readonly N20Content : IfcPositiveRatioMeasure  | undefined, public readonly COContent : IfcPositiveRatioMeasure  | undefined, public readonly CO2Content : IfcPositiveRatioMeasure  | undefined ) {}
}

export class IfcProductsOfCombustionPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProductsOfCombustionProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
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

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProductsOfCombustionPropertiesSpecification = new IfcProductsOfCombustionPropertiesSpecification();
}
