
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSpaceHeaterTypeEnum from "./IfcSpaceHeaterTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcspaceheatertype.htm
 */
export default  class IfcSpaceHeaterType extends IfcEnergyConversionDeviceType 
{    
    public readonly specification: IfcSpaceHeaterTypeSpecification = IfcSpaceHeaterTypeSpecification.instance;

private PredefinedType_? : IfcSpaceHeaterTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcSpaceHeaterTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcSpaceHeaterType';

    public readonly required: ReadonlyArray< string > = [ 'IfcSpaceHeaterType', 'IfcEnergyConversionDeviceType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSpaceHeaterTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcSpaceHeaterTypeSpecification = new IfcSpaceHeaterTypeSpecification();
}
