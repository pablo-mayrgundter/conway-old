
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcApproval from "./IfcApproval.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcapprovalrelationship.htm
 */
export default class IfcApprovalRelationship implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcApprovalRelationship';

    public readonly __version__: number = 0;

    constructor( public readonly RelatedApproval : IfcApproval , public readonly RelatingApproval : IfcApproval , public readonly Description : IfcText  | undefined, public readonly Name : IfcLabel  ) {}
}

export class IfcApprovalRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcApprovalRelationship';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'RelatedApproval',
			isCollection: false,
			rank: 0,
			baseType: 'IfcApproval'
		}, 
		{
			name: 'RelatingApproval',
			isCollection: false,
			rank: 0,
			baseType: 'IfcApproval'
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}
    ];
}
