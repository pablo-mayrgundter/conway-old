
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPersonAndOrganization from "./IfcPersonAndOrganization.bldrs"
import IfcApplication from "./IfcApplication.bldrs"
import IfcStateEnum from "./IfcStateEnum.bldrs"
import IfcChangeActionEnum from "./IfcChangeActionEnum.bldrs"
import IfcTimeStamp from "./IfcTimeStamp.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcownerhistory.htm
 */
export default  class IfcOwnerHistory extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcOwnerHistorySpecification = IfcOwnerHistorySpecification.instance;

private OwningUser_? : IfcPersonAndOrganization
    private OwningApplication_? : IfcApplication
    private State_? : IfcStateEnum
    private ChangeAction_? : IfcChangeActionEnum
    private LastModifiedDate_? : IfcTimeStamp
    private LastModifyingUser_? : IfcPersonAndOrganization
    private LastModifyingApplication_? : IfcApplication
    private CreationDate_? : IfcTimeStamp

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcOwnerHistorySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcOwnerHistory';

    public readonly required: ReadonlyArray< string > = [ 'IfcOwnerHistory' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'OwningUser',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPersonAndOrganization',
			optional: false
		}, 
		{
			name: 'OwningApplication',
			isCollection: false,
			rank: 0,
			baseType: 'IfcApplication',
			optional: false
		}, 
		{
			name: 'State',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStateEnum',
			optional: true
		}, 
		{
			name: 'ChangeAction',
			isCollection: false,
			rank: 0,
			baseType: 'IfcChangeActionEnum',
			optional: false
		}, 
		{
			name: 'LastModifiedDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeStamp',
			optional: true
		}, 
		{
			name: 'LastModifyingUser',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPersonAndOrganization',
			optional: true
		}, 
		{
			name: 'LastModifyingApplication',
			isCollection: false,
			rank: 0,
			baseType: 'IfcApplication',
			optional: true
		}, 
		{
			name: 'CreationDate',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeStamp',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcOwnerHistorySpecification = new IfcOwnerHistorySpecification();
}
