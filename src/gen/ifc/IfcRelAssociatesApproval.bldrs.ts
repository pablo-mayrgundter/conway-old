
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcApproval from "./IfcApproval.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociatesapproval.htm
 */
export default  class IfcRelAssociatesApproval extends IfcRelAssociates 
{    
    public readonly specification: IfcRelAssociatesApprovalSpecification = IfcRelAssociatesApprovalSpecification.instance;

private RelatingApproval_? : IfcApproval

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelAssociatesApprovalSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssociatesApproval';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssociatesApproval', 'IfcRelAssociates', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingApproval',
			isCollection: false,
			rank: 0,
			baseType: 'IfcApproval',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssociatesApprovalSpecification = new IfcRelAssociatesApprovalSpecification();
}
