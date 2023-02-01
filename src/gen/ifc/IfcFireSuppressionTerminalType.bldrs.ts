
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcFireSuppressionTerminalTypeEnum from "./IfcFireSuppressionTerminalTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfiresuppressionterminaltype.htm
 */
export default  class IfcFireSuppressionTerminalType extends IfcFlowTerminalType 
{    
    public readonly specification: IfcFireSuppressionTerminalTypeSpecification = IfcFireSuppressionTerminalTypeSpecification.instance;

private PredefinedType_? : IfcFireSuppressionTerminalTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcFireSuppressionTerminalTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFireSuppressionTerminalType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFireSuppressionTerminalType', 'IfcFlowTerminalType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFireSuppressionTerminalTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFireSuppressionTerminalTypeSpecification = new IfcFireSuppressionTerminalTypeSpecification();
}
