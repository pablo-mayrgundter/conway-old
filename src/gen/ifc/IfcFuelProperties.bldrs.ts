
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcThermodynamicTemperatureMeasure from "./IfcThermodynamicTemperatureMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcHeatingValueMeasure from "./IfcHeatingValueMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfuelproperties.htm
 */
export default class IfcFuelProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcFuelProperties';

    public readonly __version__: number = 0;

    constructor( public readonly CombustionTemperature : IfcThermodynamicTemperatureMeasure  | undefined, public readonly CarbonContent : IfcPositiveRatioMeasure  | undefined, public readonly LowerHeatingValue : IfcHeatingValueMeasure  | undefined, public readonly HigherHeatingValue : IfcHeatingValueMeasure  | undefined ) {}
}

export class IfcFuelPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFuelProperties';

    public readonly required: string[] = [ 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'CombustionTemperature',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermodynamicTemperatureMeasure'
		}, 
		{
			name: 'CarbonContent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'LowerHeatingValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcHeatingValueMeasure'
		}, 
		{
			name: 'HigherHeatingValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcHeatingValueMeasure'
		}
    ];
}
