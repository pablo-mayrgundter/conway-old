
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcThermodynamicTemperatureMeasure from "./IfcThermodynamicTemperatureMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcHeatingValueMeasure from "./IfcHeatingValueMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfuelproperties.htm
 */
export default  class IfcFuelProperties extends IfcMaterialProperties 
{    
    public readonly specification: IfcFuelPropertiesSpecification = IfcFuelPropertiesSpecification.instance;

private CombustionTemperature_? : IfcThermodynamicTemperatureMeasure
    private CarbonContent_? : IfcPositiveRatioMeasure
    private LowerHeatingValue_? : IfcHeatingValueMeasure
    private HigherHeatingValue_? : IfcHeatingValueMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcFuelPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFuelProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcFuelProperties', 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'CombustionTemperature',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermodynamicTemperatureMeasure',
			optional: true
		}, 
		{
			name: 'CarbonContent',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'LowerHeatingValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcHeatingValueMeasure',
			optional: true
		}, 
		{
			name: 'HigherHeatingValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcHeatingValueMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFuelPropertiesSpecification = new IfcFuelPropertiesSpecification();
}
