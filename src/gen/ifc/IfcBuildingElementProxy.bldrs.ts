
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcElementCompositionEnum from "./IfcElementCompositionEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuildingelementproxy.htm
 */
export default  class IfcBuildingElementProxy extends IfcBuildingElement 
{    
    public readonly specification: IfcBuildingElementProxySpecification = IfcBuildingElementProxySpecification.instance;

private CompositionType_? : IfcElementCompositionEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcBuildingElementProxySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBuildingElementProxy';

    public readonly required: ReadonlyArray< string > = [ 'IfcBuildingElementProxy', 'IfcBuildingElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'CompositionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElementCompositionEnum',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcBuildingElementProxySpecification = new IfcBuildingElementProxySpecification();
}
