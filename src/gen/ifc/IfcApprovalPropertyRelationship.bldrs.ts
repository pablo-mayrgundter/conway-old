
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProperty from "./IfcProperty.bldrs"
import IfcApproval from "./IfcApproval.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcapprovalpropertyrelationship.htm
 */
export default  class IfcApprovalPropertyRelationship extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcApprovalPropertyRelationshipSpecification = IfcApprovalPropertyRelationshipSpecification.instance;

private ApprovedProperties_? : Array<IfcProperty>
    private Approval_? : IfcApproval

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcApprovalPropertyRelationshipSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcApprovalPropertyRelationship';

    public readonly required: ReadonlyArray< string > = [ 'IfcApprovalPropertyRelationship' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ApprovedProperties',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcProperty>',
			optional: false
		}, 
		{
			name: 'Approval',
			isCollection: false,
			rank: 0,
			baseType: 'IfcApproval',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcApprovalPropertyRelationshipSpecification = new IfcApprovalPropertyRelationshipSpecification();
}
