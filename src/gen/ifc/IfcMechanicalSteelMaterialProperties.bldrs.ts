
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPressureMeasure from "./IfcPressureMeasure.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcModulusOfElasticityMeasure from "./IfcModulusOfElasticityMeasure.bldrs"
import IfcRelaxation from "./IfcRelaxation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmechanicalsteelmaterialproperties.htm
 */
export default  class IfcMechanicalSteelMaterialProperties extends IfcMechanicalMaterialProperties 
{    
    public readonly specification: IfcMechanicalSteelMaterialPropertiesSpecification = IfcMechanicalSteelMaterialPropertiesSpecification.instance;

private YieldStress_? : IfcPressureMeasure
    private UltimateStress_? : IfcPressureMeasure
    private UltimateStrain_? : IfcPositiveRatioMeasure
    private HardeningModule_? : IfcModulusOfElasticityMeasure
    private ProportionalStress_? : IfcPressureMeasure
    private PlasticStrain_? : IfcPositiveRatioMeasure
    private Relaxations_? : Array<IfcRelaxation>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcMechanicalSteelMaterialPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMechanicalSteelMaterialProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcMechanicalSteelMaterialProperties', 'IfcMechanicalMaterialProperties', 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'YieldStress',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPressureMeasure',
			optional: true
		}, 
		{
			name: 'UltimateStress',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPressureMeasure',
			optional: true
		}, 
		{
			name: 'UltimateStrain',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'HardeningModule',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfElasticityMeasure',
			optional: true
		}, 
		{
			name: 'ProportionalStress',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPressureMeasure',
			optional: true
		}, 
		{
			name: 'PlasticStrain',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'Relaxations',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcRelaxation>',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMechanicalSteelMaterialPropertiesSpecification = new IfcMechanicalSteelMaterialPropertiesSpecification();
}
