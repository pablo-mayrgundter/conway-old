
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcElectricGeneratorTypeEnum from "./IfcElectricGeneratorTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricgeneratortype.htm
 */
export default  class IfcElectricGeneratorType extends IfcEnergyConversionDeviceType 
{    
    public readonly specification: IfcElectricGeneratorTypeSpecification = IfcElectricGeneratorTypeSpecification.instance;

private PredefinedType_? : IfcElectricGeneratorTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcElectricGeneratorTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElectricGeneratorType';

    public readonly required: ReadonlyArray< string > = [ 'IfcElectricGeneratorType', 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElectricGeneratorTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcElectricGeneratorTypeSpecification = new IfcElectricGeneratorTypeSpecification();
}
