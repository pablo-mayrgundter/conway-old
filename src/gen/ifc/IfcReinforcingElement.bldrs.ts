
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcLabel} from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingelement.htm
 */
export default class IfcReinforcingElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcReinforcingElement';

    public readonly __version__: number = 0;

	SteelGrade? : IfcLabel;

}

export class IfcReinforcingElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcReinforcingElement';

    public readonly required: string[] = [ 'IfcBuildingElementComponent', 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'SteelGrade',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
