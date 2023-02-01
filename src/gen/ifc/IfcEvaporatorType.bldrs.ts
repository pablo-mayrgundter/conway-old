
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcEvaporatorTypeEnum from "./IfcEvaporatorTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcevaporatortype.htm
 */
export default  class IfcEvaporatorType extends IfcEnergyConversionDeviceType 
{    
    public readonly specification: IfcEvaporatorTypeSpecification = IfcEvaporatorTypeSpecification.instance;

private PredefinedType_? : IfcEvaporatorTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcEvaporatorTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcEvaporatorType';

    public readonly required: ReadonlyArray< string > = [ 'IfcEvaporatorType', 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcEvaporatorTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcEvaporatorTypeSpecification = new IfcEvaporatorTypeSpecification();
}
