
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPressureMeasure from "./IfcPressureMeasure.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcNormalisedRatioMeasure from "./IfcNormalisedRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmechanicalconcretematerialproperties.htm
 */
export default class IfcMechanicalConcreteMaterialProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcMechanicalConcreteMaterialProperties';

    public readonly __version__: number = 0;

    constructor( public readonly CompressiveStrength : IfcPressureMeasure  | undefined, public readonly MaxAggregateSize : IfcPositiveLengthMeasure  | undefined, public readonly AdmixturesDescription : IfcText  | undefined, public readonly Workability : IfcText  | undefined, public readonly ProtectivePoreRatio : IfcNormalisedRatioMeasure  | undefined, public readonly WaterImpermeability : IfcText  | undefined ) {}
}

export class IfcMechanicalConcreteMaterialPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcMechanicalConcreteMaterialProperties';

    public readonly required: string[] = [ 'IfcMechanicalMaterialProperties', 'IfcMaterialProperties' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'CompressiveStrength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPressureMeasure'
		}, 
		{
			name: 'MaxAggregateSize',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'AdmixturesDescription',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}, 
		{
			name: 'Workability',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}, 
		{
			name: 'ProtectivePoreRatio',
			isCollection: false,
			rank: 0,
			baseType: 'IfcNormalisedRatioMeasure'
		}, 
		{
			name: 'WaterImpermeability',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}
    ];
}
