
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcSectionReinforcementProperties from "./IfcSectionReinforcementProperties.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcementdefinitionproperties.htm
 */
export default class IfcReinforcementDefinitionProperties implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcReinforcementDefinitionProperties';

    public readonly __version__: number = 0;

    constructor( public readonly DefinitionType : IfcLabel  | undefined, public readonly ReinforcementSectionDefinitions : Array<IfcSectionReinforcementProperties>  ) {}
}

export class IfcReinforcementDefinitionPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcReinforcementDefinitionProperties';

    public readonly required: string[] = [ 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'DefinitionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'ReinforcementSectionDefinitions',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcSectionReinforcementProperties>'
		}
    ];
}