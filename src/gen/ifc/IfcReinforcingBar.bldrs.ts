
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"
import IfcReinforcingBarRoleEnum from "./IfcReinforcingBarRoleEnum.bldrs"
import IfcReinforcingBarSurfaceEnum from "./IfcReinforcingBarSurfaceEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingbar.htm
 */
export default class IfcReinforcingBar implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcReinforcingBar';

    public readonly __version__: number = 0;

    constructor( public readonly NominalDiameter : IfcPositiveLengthMeasure , public readonly CrossSectionArea : IfcAreaMeasure , public readonly BarLength : IfcPositiveLengthMeasure  | undefined, public readonly BarRole : IfcReinforcingBarRoleEnum , public readonly BarSurface : IfcReinforcingBarSurfaceEnum  | undefined ) {}
}

export class IfcReinforcingBarSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcReinforcingBar';

    public readonly required: string[] = [ 'IfcReinforcingElement', 'IfcBuildingElementComponent', 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'NominalDiameter',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'CrossSectionArea',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure'
		}, 
		{
			name: 'BarLength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure'
		}, 
		{
			name: 'BarRole',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReinforcingBarRoleEnum'
		}, 
		{
			name: 'BarSurface',
			isCollection: false,
			rank: 0,
			baseType: 'IfcReinforcingBarSurfaceEnum'
		}
    ];
}
