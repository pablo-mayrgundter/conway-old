
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcGloballyUniqueId from "./IfcGloballyUniqueId.bldrs"
import IfcOwnerHistory from "./IfcOwnerHistory.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcroot.htm
 */
export default abstract class IfcRoot extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcRootSpecification = IfcRootSpecification.instance;

private GlobalId_? : IfcGloballyUniqueId
    private OwnerHistory_? : IfcOwnerHistory
    private Name_? : IfcLabel
    private Description_? : IfcText

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRootSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRoot';

    public readonly required: ReadonlyArray< string > = [ 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'GlobalId',
			isCollection: false,
			rank: 0,
			baseType: 'IfcGloballyUniqueId',
			optional: false
		}, 
		{
			name: 'OwnerHistory',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOwnerHistory',
			optional: false
		}, 
		{
			name: 'Name',
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

    public static readonly instance: IfcRootSpecification = new IfcRootSpecification();
}
