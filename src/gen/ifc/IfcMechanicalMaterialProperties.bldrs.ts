
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDynamicViscosityMeasure from "./IfcDynamicViscosityMeasure.bldrs"
import IfcModulusOfElasticityMeasure from "./IfcModulusOfElasticityMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcThermalExpansionCoefficientMeasure from "./IfcThermalExpansionCoefficientMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmechanicalmaterialproperties.htm
 */
export default  class IfcMechanicalMaterialProperties extends IfcMaterialProperties 
{    
    public readonly specification: IfcMechanicalMaterialPropertiesSpecification = IfcMechanicalMaterialPropertiesSpecification.instance;

private DynamicViscosity_? : IfcDynamicViscosityMeasure
    private YoungModulus_? : IfcModulusOfElasticityMeasure
    private ShearModulus_? : IfcModulusOfElasticityMeasure
    private PoissonRatio_? : IfcPositiveRatioMeasure
    private ThermalExpansionCoefficient_? : IfcThermalExpansionCoefficientMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcMechanicalMaterialPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMechanicalMaterialProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcMechanicalMaterialProperties', 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'DynamicViscosity',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDynamicViscosityMeasure',
			optional: true
		}, 
		{
			name: 'YoungModulus',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfElasticityMeasure',
			optional: true
		}, 
		{
			name: 'ShearModulus',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfElasticityMeasure',
			optional: true
		}, 
		{
			name: 'PoissonRatio',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'ThermalExpansionCoefficient',
			isCollection: false,
			rank: 0,
			baseType: 'IfcThermalExpansionCoefficientMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMechanicalMaterialPropertiesSpecification = new IfcMechanicalMaterialPropertiesSpecification();
}
