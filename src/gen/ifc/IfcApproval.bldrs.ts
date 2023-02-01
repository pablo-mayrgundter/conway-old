
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
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
export default  class IfcApproval extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcApprovalSpecification = IfcApprovalSpecification.instance;

private Description_? : IfcText
    private ApprovalDateTime_? : IfcCalendarDate|IfcLocalTime|IfcDateAndTime
    private ApprovalStatus_? : IfcLabel
    private ApprovalLevel_? : IfcLabel
    private ApprovalQualifier_? : IfcText
    private Name_? : IfcLabel
    private Identifier_? : IfcIdentifier

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcApprovalSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcApproval';

    public readonly required: ReadonlyArray< string > = [ 'IfcApproval' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}, 
		{
			name: 'ApprovalDateTime',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCalendarDate|IfcLocalTime|IfcDateAndTime',
			optional: false
		}, 
		{
			name: 'ApprovalStatus',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'ApprovalLevel',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'ApprovalQualifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}, 
		{
			name: 'Identifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcApprovalSpecification = new IfcApprovalSpecification();
}
