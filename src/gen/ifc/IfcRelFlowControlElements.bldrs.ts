
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcDistributionControlElement} from "./IfcDistributionControlElement.bldrs"
import {IfcDistributionFlowElement} from "./IfcDistributionFlowElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelflowcontrolelements.htm
 */
export default class IfcRelFlowControlElements implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelFlowControlElements';

    public readonly __version__: number = 0;

	RelatedControlElements : Array<IfcDistributionControlElement>;
	RelatingFlowElement : IfcDistributionFlowElement;

}

export class IfcRelFlowControlElementsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelFlowControlElements';

    public readonly required: string[] = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatedControlElements',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcDistributionControlElement>'
		}, 
		{
			name: 'RelatingFlowElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDistributionFlowElement'
		}
    ];
}
