
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcApproval from "./IfcApproval.bldrs"
import IfcActorRole from "./IfcActorRole.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcapprovalactorrelationship.htm
 */
export default class IfcApprovalActorRelationship implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcApprovalActorRelationship';

    public readonly __version__: number = 0;

    constructor( public readonly Actor : IfcOrganization|IfcPerson|IfcPersonAndOrganization , public readonly Approval : IfcApproval , public readonly Role : IfcActorRole  ) {}
}

export class IfcApprovalActorRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcApprovalActorRelationship';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Actor',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization|IfcPerson|IfcPersonAndOrganization'
		}, 
		{
			name: 'Approval',
			isCollection: false,
			rank: 0,
			baseType: 'IfcApproval'
		}, 
		{
			name: 'Role',
			isCollection: false,
			rank: 0,
			baseType: 'IfcActorRole'
		}
    ];
}
