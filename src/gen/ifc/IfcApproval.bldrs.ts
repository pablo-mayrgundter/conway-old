
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcLocalTime from "./IfcLocalTime.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcApprovalActorRelationship from "./IfcApprovalActorRelationship.bldrs"
import IfcApprovalRelationship from "./IfcApprovalRelationship.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcapproval.htm
 */
export default class IfcApproval implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcApproval';

    public readonly __version__: number = 0;

    constructor( public readonly Description : IfcText  | undefined, public readonly ApprovalDateTime : IfcCalendarDate|IfcLocalTime|IfcDateAndTime , public readonly ApprovalStatus : IfcLabel  | undefined, public readonly ApprovalLevel : IfcLabel  | undefined, public readonly ApprovalQualifier : IfcText  | undefined, public readonly Name : IfcLabel , public readonly Identifier : IfcIdentifier  ) {}
}

export class IfcApprovalSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcApproval';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}, 
		{
			name: 'ApprovalDateTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime'
		}, 
		{
			name: 'ApprovalStatus',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'ApprovalLevel',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'ApprovalQualifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Identifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}
    ];
}
