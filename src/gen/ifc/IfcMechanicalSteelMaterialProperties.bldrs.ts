
import Component from "../../core/components"
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
export default class IfcMechanicalSteelMaterialProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMechanicalSteelMaterialProperties';

    public readonly __version__: number = 0;

    public readonly __specification__: IfcMechanicalSteelMaterialPropertiesSpecification = IfcMechanicalSteelMaterialPropertiesSpecification.instance;

    constructor( public readonly YieldStress : IfcPressureMeasure  | undefined, public readonly UltimateStress : IfcPressureMeasure  | undefined, public readonly UltimateStrain : IfcPositiveRatioMeasure  | undefined, public readonly HardeningModule : IfcModulusOfElasticityMeasure  | undefined, public readonly ProportionalStress : IfcPressureMeasure  | undefined, public readonly PlasticStrain : IfcPositiveRatioMeasure  | undefined, public readonly Relaxations : Array<IfcRelaxation>  | undefined ) {}
}

export class IfcMechanicalSteelMaterialPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMechanicalSteelMaterialProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcMechanicalMaterialProperties', 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'YieldStress',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPressureMeasure'
		}, 
		{
			name: 'UltimateStress',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPressureMeasure'
		}, 
		{
			name: 'UltimateStrain',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'HardeningModule',
			isCollection: false,
			rank: 0,
			baseType: 'IfcModulusOfElasticityMeasure'
		}, 
		{
			name: 'ProportionalStress',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPressureMeasure'
		}, 
		{
			name: 'PlasticStrain',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure'
		}, 
		{
			name: 'Relaxations',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcRelaxation>'
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcMechanicalSteelMaterialPropertiesSpecification = new IfcMechanicalSteelMaterialPropertiesSpecification();
}
