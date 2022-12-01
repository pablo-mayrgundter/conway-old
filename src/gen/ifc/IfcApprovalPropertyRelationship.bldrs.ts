
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import {IfcProperty} from "./IfcProperty.bldrs"
import {IfcApproval} from "./IfcApproval.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcapprovalpropertyrelationship.htm
 */
export default class IfcApprovalPropertyRelationship implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcApprovalPropertyRelationship';

    public readonly __version__: number = 0;

	ApprovedProperties : Array<IfcProperty>;
	Approval : IfcApproval;

}

export class IfcApprovalPropertyRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcApprovalPropertyRelationship';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'ApprovedProperties',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcProperty>'
		}, 
		{
			name: 'Approval',
			isCollection: false,
			rank: 0,
			baseType: 'IfcApproval'
		}
    ];
}
