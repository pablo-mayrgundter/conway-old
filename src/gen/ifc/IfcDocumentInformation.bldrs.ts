
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
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
export default  class IfcDocumentInformation extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcDocumentInformationSpecification = IfcDocumentInformationSpecification.instance;

private DocumentId_? : IfcIdentifier
    private Name_? : IfcLabel
    private Description_? : IfcText
    private DocumentReferences_? : Array<IfcDocumentReference>
    private Purpose_? : IfcText
    private IntendedUse_? : IfcText
    private Scope_? : IfcText
    private Revision_? : IfcLabel
    private DocumentOwner_? : IfcOrganization|IfcPerson|IfcPersonAndOrganization
    private Editors_? : Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization>
    private CreationTime_? : IfcDateAndTime
    private LastRevisionTime_? : IfcDateAndTime
    private ElectronicFormat_? : IfcDocumentElectronicFormat
    private ValidFrom_? : IfcCalendarDate
    private ValidUntil_? : IfcCalendarDate
    private Confidentiality_? : IfcDocumentConfidentialityEnum
    private Status_? : IfcDocumentStatusEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDocumentInformationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDocumentInformation';

    public readonly required: ReadonlyArray< string > = [ 'IfcDocumentInformation' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'DocumentId',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: false
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}, 
		{
			name: 'DocumentReferences',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcDocumentReference>',
			optional: true
		}, 
		{
			name: 'Purpose',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}, 
		{
			name: 'IntendedUse',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}, 
		{
			name: 'Scope',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}, 
		{
			name: 'Revision',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'DocumentOwner',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization|IfcPerson|IfcPersonAndOrganization',
			optional: true
		}, 
		{
			name: 'Editors',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcOrganization|IfcPerson|IfcPersonAndOrganization>',
			optional: true
		}, 
		{
			name: 'CreationTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDateAndTime',
			optional: true
		}, 
		{
			name: 'LastRevisionTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDateAndTime',
			optional: true
		}, 
		{
			name: 'ElectronicFormat',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDocumentElectronicFormat',
			optional: true
		}, 
		{
			name: 'ValidFrom',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate',
			optional: true
		}, 
		{
			name: 'ValidUntil',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate',
			optional: true
		}, 
		{
			name: 'Confidentiality',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDocumentConfidentialityEnum',
			optional: true
		}, 
		{
			name: 'Status',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDocumentStatusEnum',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDocumentInformationSpecification = new IfcDocumentInformationSpecification();
}
