
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcIsothermalMoistureCapacityMeasure from "./IfcIsothermalMoistureCapacityMeasure.bldrs"
import IfcVaporPermeabilityMeasure from "./IfcVaporPermeabilityMeasure.bldrs"
import IfcMoistureDiffusivityMeasure from "./IfcMoistureDiffusivityMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifchygroscopicmaterialproperties.htm
 */
export default  class IfcHygroscopicMaterialProperties extends IfcMaterialProperties 
{    
    public readonly specification: IfcHygroscopicMaterialPropertiesSpecification = IfcHygroscopicMaterialPropertiesSpecification.instance;

private UpperVaporResistanceFactor_? : IfcPositiveRatioMeasure
    private LowerVaporResistanceFactor_? : IfcPositiveRatioMeasure
    private IsothermalMoistureCapacity_? : IfcIsothermalMoistureCapacityMeasure
    private VaporPermeability_? : IfcVaporPermeabilityMeasure
    private MoistureDiffusivity_? : IfcMoistureDiffusivityMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcHygroscopicMaterialPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcHygroscopicMaterialProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcHygroscopicMaterialProperties', 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'UpperVaporResistanceFactor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'LowerVaporResistanceFactor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'IsothermalMoistureCapacity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIsothermalMoistureCapacityMeasure',
			optional: true
		}, 
		{
			name: 'VaporPermeability',
			isCollection: false,
			rank: 0,
			baseType: 'IfcVaporPermeabilityMeasure',
			optional: true
		}, 
		{
			name: 'MoistureDiffusivity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMoistureDiffusivityMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcHygroscopicMaterialPropertiesSpecification = new IfcHygroscopicMaterialPropertiesSpecification();
}
