
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingmesh.htm
 */
export default class IfcReinforcingMesh implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcReinforcingMesh';

    public readonly __version__: number = 0;

    constructor( public readonly MeshLength : IfcPositiveLengthMeasure  | undefined, public readonly MeshWidth : IfcPositiveLengthMeasure  | undefined, public readonly LongitudinalBarNominalDiameter : IfcPositiveLengthMeasure , public readonly TransverseBarNominalDiameter : IfcPositiveLengthMeasure , public readonly LongitudinalBarCrossSectionArea : IfcAreaMeasure , public readonly TransverseBarCrossSectionArea : IfcAreaMeasure , public readonly LongitudinalBarSpacing : IfcPositiveLengthMeasure , public readonly TransverseBarSpacing : IfcPositiveLengthMeasure  ) {}
}

export class IfcReinforcingMeshSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcReinforcingMesh';

    public readonly required: string[] = [ 'IfcReinforcingElement', 'IfcBuildingElementComponent', 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'MeshLength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'MeshWidth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'LongitudinalBarNominalDiameter',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'TransverseBarNominalDiameter',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'LongitudinalBarCrossSectionArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure'
		}, 
		{
			name: 'TransverseBarCrossSectionArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure'
		}, 
		{
			name: 'LongitudinalBarSpacing',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'TransverseBarSpacing',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}
    ];
}
