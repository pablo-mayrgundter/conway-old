
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcStackTerminalTypeEnum from "./IfcStackTerminalTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstackterminaltype.htm
 */
export default  class IfcStackTerminalType extends IfcFlowTerminalType 
{    
    public readonly specification: IfcStackTerminalTypeSpecification = IfcStackTerminalTypeSpecification.instance;

private PredefinedType_? : IfcStackTerminalTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStackTerminalTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStackTerminalType';

    public readonly required: ReadonlyArray< string > = [ 'IfcStackTerminalType', 'IfcFlowTerminalType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStackTerminalTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStackTerminalTypeSpecification = new IfcStackTerminalTypeSpecification();
}
