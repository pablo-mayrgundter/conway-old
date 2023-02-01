
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSwitchingDeviceTypeEnum from "./IfcSwitchingDeviceTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcswitchingdevicetype.htm
 */
export default  class IfcSwitchingDeviceType extends IfcFlowControllerType 
{    
    public readonly specification: IfcSwitchingDeviceTypeSpecification = IfcSwitchingDeviceTypeSpecification.instance;

private PredefinedType_? : IfcSwitchingDeviceTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSwitchingDeviceTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSwitchingDeviceType';

    public readonly required: ReadonlyArray< string > = [ 'IfcSwitchingDeviceType', 'IfcFlowControllerType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSwitchingDeviceTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSwitchingDeviceTypeSpecification = new IfcSwitchingDeviceTypeSpecification();
}
