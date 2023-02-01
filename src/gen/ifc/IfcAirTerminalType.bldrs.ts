
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAirTerminalTypeEnum from "./IfcAirTerminalTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcairterminaltype.htm
 */
export default  class IfcAirTerminalType extends IfcFlowTerminalType 
{    
    public readonly specification: IfcAirTerminalTypeSpecification = IfcAirTerminalTypeSpecification.instance;

private PredefinedType_? : IfcAirTerminalTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcAirTerminalTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAirTerminalType';

    public readonly required: ReadonlyArray< string > = [ 'IfcAirTerminalType', 'IfcFlowTerminalType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAirTerminalTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAirTerminalTypeSpecification = new IfcAirTerminalTypeSpecification();
}
