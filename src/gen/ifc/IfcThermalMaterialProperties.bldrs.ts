
import Component from "../../core/component"
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
export default  class IfcThermalMaterialProperties extends IfcMaterialProperties 
{    
    public readonly specification: IfcThermalMaterialPropertiesSpecification = IfcThermalMaterialPropertiesSpecification.instance;

private SpecificHeatCapacity_? : IfcSpecificHeatCapacityMeasure
    private BoilingPoint_? : IfcThermodynamicTemperatureMeasure
    private FreezingPoint_? : IfcThermodynamicTemperatureMeasure
    private ThermalConductivity_? : IfcThermalConductivityMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcThermalMaterialPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcThermalMaterialProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcThermalMaterialProperties', 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'SpecificHeatCapacity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpecificHeatCapacityMeasure',
			optional: true
		}, 
		{
			name: 'BoilingPoint',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermodynamicTemperatureMeasure',
			optional: true
		}, 
		{
			name: 'FreezingPoint',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermodynamicTemperatureMeasure',
			optional: true
		}, 
		{
			name: 'ThermalConductivity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermalConductivityMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcThermalMaterialPropertiesSpecification = new IfcThermalMaterialPropertiesSpecification();
}
