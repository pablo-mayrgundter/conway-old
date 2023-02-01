
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcBuildingElementProxyTypeEnum from "./IfcBuildingElementProxyTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuildingelementproxytype.htm
 */
export default  class IfcBuildingElementProxyType extends IfcBuildingElementType 
{    
    public readonly specification: IfcBuildingElementProxyTypeSpecification = IfcBuildingElementProxyTypeSpecification.instance;

private PredefinedType_? : IfcBuildingElementProxyTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcBuildingElementProxyTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBuildingElementProxyType';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElementProxyType', 'IfcBuildingElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBuildingElementProxyTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBuildingElementProxyTypeSpecification = new IfcBuildingElementProxyTypeSpecification();
}
