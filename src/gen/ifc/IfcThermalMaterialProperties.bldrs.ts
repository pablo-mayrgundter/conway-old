
import Component from "../../core/components"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
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

    public readonly __specification__: IfcThermalMaterialPropertiesSpecification = IfcThermalMaterialPropertiesSpecification.instance;

    constructor( public readonly SpecificHeatCapacity : IfcSpecificHeatCapacityMeasure  | undefined, public readonly BoilingPoint : IfcThermodynamicTemperatureMeasure  | undefined, public readonly FreezingPoint : IfcThermodynamicTemperatureMeasure  | undefined, public readonly ThermalConductivity : IfcThermalConductivityMeasure  | undefined ) {}
}

export class IfcThermalMaterialPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcThermalMaterialProperties';

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

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcThermalMaterialPropertiesSpecification = new IfcThermalMaterialPropertiesSpecification();
}
