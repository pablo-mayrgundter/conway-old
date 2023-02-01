
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcapplication.htm
 */
export default  class IfcApplication extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcApplicationSpecification = IfcApplicationSpecification.instance;

private ApplicationDeveloper_? : IfcOrganization
    private Version_? : IfcLabel
    private ApplicationFullName_? : IfcLabel
    private ApplicationIdentifier_? : IfcIdentifier

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcApplicationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcApplication';

    public readonly required: ReadonlyArray< string > = [ 'IfcApplication' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ApplicationDeveloper',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOrganization',
			optional: false
		}, 
		{
			name: 'Version',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}, 
		{
			name: 'ApplicationFullName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}, 
		{
			name: 'ApplicationIdentifier',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcApplicationSpecification = new IfcApplicationSpecification();
}
