
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProtectiveDeviceTypeEnum from "./IfcProtectiveDeviceTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprotectivedevicetype.htm
 */
export default  class IfcProtectiveDeviceType extends IfcFlowControllerType 
{    
    public readonly specification: IfcProtectiveDeviceTypeSpecification = IfcProtectiveDeviceTypeSpecification.instance;

private PredefinedType_? : IfcProtectiveDeviceTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcProtectiveDeviceTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProtectiveDeviceType';

    public readonly required: ReadonlyArray< string > = [ 'IfcProtectiveDeviceType', 'IfcFlowControllerType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProtectiveDeviceTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProtectiveDeviceTypeSpecification = new IfcProtectiveDeviceTypeSpecification();
}
