
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcElement} from "./IfcElement.bldrs"
import {IfcFeatureElementSubtraction} from "./IfcFeatureElementSubtraction.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelvoidselement.htm
 */
export default class IfcRelVoidsElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelVoidsElement';

    public readonly __version__: number = 0;

	RelatingBuildingElement : IfcElement;
	RelatedOpeningElement : IfcFeatureElementSubtraction;

}

export class IfcRelVoidsElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelVoidsElement';

    public readonly required: string[] = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingBuildingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement'
		}, 
		{
			name: 'RelatedOpeningElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFeatureElementSubtraction'
		}
    ];
}
