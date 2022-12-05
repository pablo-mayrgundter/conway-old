
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcSpecificHeatCapacityMeasure from "./IfcSpecificHeatCapacityMeasure.bldrs"
import IfcThermodynamicTemperatureMeasure from "./IfcThermodynamicTemperatureMeasure.bldrs"
import IfcThermalConductivityMeasure from "./IfcThermalConductivityMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcthermalmaterialproperties.htm
 */
export default class IfcThermalMaterialProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcThermalMaterialProperties';

    public readonly __version__: number = 0;

    constructor( public readonly SpecificHeatCapacity : IfcSpecificHeatCapacityMeasure  | undefined, public readonly BoilingPoint : IfcThermodynamicTemperatureMeasure  | undefined, public readonly FreezingPoint : IfcThermodynamicTemperatureMeasure  | undefined, public readonly ThermalConductivity : IfcThermalConductivityMeasure  | undefined ) {}
}

export class IfcThermalMaterialPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcThermalMaterialProperties';

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
			name: 'BoilingPoint',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermodynamicTemperatureMeasure'
		}, 
		{
			name: 'FreezingPoint',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermodynamicTemperatureMeasure'
		}, 
		{
			name: 'ThermalConductivity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermalConductivityMeasure'
		}
    ];
}
