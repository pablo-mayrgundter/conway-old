
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAirToAirHeatRecoveryTypeEnum from "./IfcAirToAirHeatRecoveryTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcairtoairheatrecoverytype.htm
 */
export default  class IfcAirToAirHeatRecoveryType extends IfcEnergyConversionDeviceType 
{    
    public readonly specification: IfcAirToAirHeatRecoveryTypeSpecification = IfcAirToAirHeatRecoveryTypeSpecification.instance;

private PredefinedType_? : IfcAirToAirHeatRecoveryTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcAirToAirHeatRecoveryTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAirToAirHeatRecoveryType';

    public readonly required: ReadonlyArray< string > = [ 'IfcAirToAirHeatRecoveryType', 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAirToAirHeatRecoveryTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAirToAirHeatRecoveryTypeSpecification = new IfcAirToAirHeatRecoveryTypeSpecification();
}
