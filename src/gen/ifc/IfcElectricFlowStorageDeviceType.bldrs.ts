
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcElectricFlowStorageDeviceTypeEnum from "./IfcElectricFlowStorageDeviceTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricflowstoragedevicetype.htm
 */
export default  class IfcElectricFlowStorageDeviceType extends IfcFlowStorageDeviceType 
{    
    public readonly specification: IfcElectricFlowStorageDeviceTypeSpecification = IfcElectricFlowStorageDeviceTypeSpecification.instance;

private PredefinedType_? : IfcElectricFlowStorageDeviceTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcElectricFlowStorageDeviceTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElectricFlowStorageDeviceType';

    public readonly required: ReadonlyArray< string > = [ 'IfcElectricFlowStorageDeviceType', 'IfcFlowStorageDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElectricFlowStorageDeviceTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcElectricFlowStorageDeviceTypeSpecification = new IfcElectricFlowStorageDeviceTypeSpecification();
}
