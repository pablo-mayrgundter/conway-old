
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcDocumentReference from "./IfcDocumentReference.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcDateAndTime from "./IfcDateAndTime.bldrs"
import IfcDocumentElectronicFormat from "./IfcDocumentElectronicFormat.bldrs"
import IfcCalendarDate from "./IfcCalendarDate.bldrs"
import IfcDocumentConfidentialityEnum from "./IfcDocumentConfidentialityEnum.bldrs"
import IfcDocumentStatusEnum from "./IfcDocumentStatusEnum.bldrs"
import IfcDocumentInformationRelationship from "./IfcDocumentInformationRelationship.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdocumentinformation.htm
 */
export default class IfcDocumentInformation implements Component< SchemaSpecificationIFC > 
{
    public readonly __type__ = 'IfcDocumentInformation';

    public readonly __version__: number = 0;

    constructor( public readonly DocumentId : IfcIdentifier , public readonly Name : IfcLabel , public readonly Description : IfcText  | undefined, public readonly DocumentReferences : Array<IfcDocumentReference>  | undefined, public readonly Purpose : IfcText  | undefined, public readonly IntendedUse : IfcText  | undefined, public readonly Scope : IfcText  | undefined, public readonly Revision : IfcLabel  | undefined, public readonly DocumentOwner : IfcOrganization|IfcPerson|IfcPersonAndOrganization  | undefined, public readonly Editors : Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization>  | undefined, public readonly CreationTime : IfcDateAndTime  | undefined, public readonly LastRevisionTime : IfcDateAndTime  | undefined, public readonly ElectronicFormat : IfcDocumentElectronicFormat  | undefined, public readonly ValidFrom : IfcCalendarDate  | undefined, public readonly ValidUntil : IfcCalendarDate  | undefined, public readonly Confidentiality : IfcDocumentConfidentialityEnum  | undefined, public readonly Status : IfcDocumentStatusEnum  | undefined ) {}
}

export class IfcDocumentInformationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDocumentInformation';

    public readonly required: string[] = [  ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: AttributeSpecification[] = 
    [
		{
			name: 'DocumentId',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier'
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}, 
		{
			name: 'DocumentReferences',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcDocumentReference>'
		}, 
		{
			name: 'Purpose',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}, 
		{
			name: 'IntendedUse',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}, 
		{
			name: 'Scope',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText'
		}, 
		{
			name: 'Revision',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel'
		}, 
		{
			name: 'DocumentOwner',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization|IfcPerson|IfcPersonAndOrganization'
		}, 
		{
			name: 'Editors',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization>'
		}, 
		{
			name: 'CreationTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDateAndTime'
		}, 
		{
			name: 'LastRevisionTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDateAndTime'
		}, 
		{
			name: 'ElectronicFormat',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDocumentElectronicFormat'
		}, 
		{
			name: 'ValidFrom',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate'
		}, 
		{
			name: 'ValidUntil',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate'
		}, 
		{
			name: 'Confidentiality',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDocumentConfidentialityEnum'
		}, 
		{
			name: 'Status',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDocumentStatusEnum'
		}
    ];
}
