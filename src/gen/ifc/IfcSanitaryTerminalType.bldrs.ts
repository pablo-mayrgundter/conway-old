
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSanitaryTerminalTypeEnum from "./IfcSanitaryTerminalTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsanitaryterminaltype.htm
 */
export default  class IfcSanitaryTerminalType extends IfcFlowTerminalType 
{    
    public readonly specification: IfcSanitaryTerminalTypeSpecification = IfcSanitaryTerminalTypeSpecification.instance;

private PredefinedType_? : IfcSanitaryTerminalTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSanitaryTerminalTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSanitaryTerminalType';

    public readonly required: ReadonlyArray< string > = [ 'IfcSanitaryTerminalType', 'IfcFlowTerminalType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSanitaryTerminalTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSanitaryTerminalTypeSpecification = new IfcSanitaryTerminalTypeSpecification();
}
