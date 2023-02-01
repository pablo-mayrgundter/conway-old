
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcApproval from "./IfcApproval.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcapprovalrelationship.htm
 */
export default  class IfcApprovalRelationship extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcApprovalRelationshipSpecification = IfcApprovalRelationshipSpecification.instance;

private RelatedApproval_? : IfcApproval
    private RelatingApproval_? : IfcApproval
    private Description_? : IfcText
    private Name_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcApprovalRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcApprovalRelationship';

    public readonly required: ReadonlyArray< string > = [ 'IfcApprovalRelationship' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatedApproval',
			isCollection: false,
			rank: 0,
			baseType: 'IfcApproval',
			optional: false
		}, 
		{
			name: 'RelatingApproval',
			isCollection: false,
			rank: 0,
			baseType: 'IfcApproval',
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
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcApprovalRelationshipSpecification = new IfcApprovalRelationshipSpecification();
}
