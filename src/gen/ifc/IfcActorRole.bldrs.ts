
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcRoleEnum from "./IfcRoleEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcactorrole.htm
 */
export default  class IfcActorRole extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcActorRoleSpecification = IfcActorRoleSpecification.instance;

private Role_? : IfcRoleEnum
    private UserDefinedRole_? : IfcLabel
    private Description_? : IfcText

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcActorRoleSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcActorRole';

    public readonly required: ReadonlyArray< string > = [ 'IfcActorRole' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Role',
			isCollection: false,
			rank: 0,
			baseType: 'IfcRoleEnum',
			optional: false
		}, 
		{
			name: 'UserDefinedRole',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcActorRoleSpecification = new IfcActorRoleSpecification();
}
