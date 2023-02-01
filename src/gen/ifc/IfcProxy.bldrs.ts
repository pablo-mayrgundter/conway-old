
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcObjectTypeEnum from "./IfcObjectTypeEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproxy.htm
 */
export default  class IfcProxy extends IfcProduct 
{    
    public readonly specification: IfcProxySpecification = IfcProxySpecification.instance;

private ProxyType_? : IfcObjectTypeEnum
    private Tag_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcProxySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProxy';

    public readonly required: ReadonlyArray< string > = [ 'IfcProxy', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ProxyType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcObjectTypeEnum',
			optional: false
		}, 
		{
			name: 'Tag',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProxySpecification = new IfcProxySpecification();
}
