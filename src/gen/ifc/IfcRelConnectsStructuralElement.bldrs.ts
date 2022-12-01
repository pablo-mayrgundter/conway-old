
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcElement} from "./IfcElement.bldrs"
import {IfcStructuralMember} from "./IfcStructuralMember.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsstructuralelement.htm
 */
export default class IfcRelConnectsStructuralElement implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcRelConnectsStructuralElement';

    public readonly __version__: number = 0;

	RelatingElement : IfcElement;
	RelatedStructuralMember : IfcStructuralMember;

}

export class IfcRelConnectsStructuralElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnectsStructuralElement';

    public readonly required: string[] = [ 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement'
		}, 
		{
			name: 'RelatedStructuralMember',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralMember'
		}
    ];
}
