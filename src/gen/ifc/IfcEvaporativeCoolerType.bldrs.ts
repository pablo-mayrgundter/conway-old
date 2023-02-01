
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcEvaporativeCoolerTypeEnum from "./IfcEvaporativeCoolerTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcevaporativecoolertype.htm
 */
export default  class IfcEvaporativeCoolerType extends IfcEnergyConversionDeviceType 
{    
    public readonly specification: IfcEvaporativeCoolerTypeSpecification = IfcEvaporativeCoolerTypeSpecification.instance;

private PredefinedType_? : IfcEvaporativeCoolerTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcEvaporativeCoolerTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEvaporativeCoolerType';

    public readonly required: ReadonlyArray< string > = [ 'IfcEvaporativeCoolerType', 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcEvaporativeCoolerTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcEvaporativeCoolerTypeSpecification = new IfcEvaporativeCoolerTypeSpecification();
}
