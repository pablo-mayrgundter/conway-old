
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcexternalreference.htm
 */
export default abstract class IfcExternalReference extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcExternalReferenceSpecification = IfcExternalReferenceSpecification.instance;

private Location_? : IfcLabel
    private ItemReference_? : IfcIdentifier
    private Name_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcExternalReferenceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcExternalReference';

    public readonly required: ReadonlyArray< string > = [ 'IfcExternalReference' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Location',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'ItemReference',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: true
		}, 
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcExternalReferenceSpecification = new IfcExternalReferenceSpecification();
}
