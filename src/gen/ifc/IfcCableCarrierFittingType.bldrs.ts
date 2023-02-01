
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCableCarrierFittingTypeEnum from "./IfcCableCarrierFittingTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccablecarrierfittingtype.htm
 */
export default  class IfcCableCarrierFittingType extends IfcFlowFittingType 
{    
    public readonly specification: IfcCableCarrierFittingTypeSpecification = IfcCableCarrierFittingTypeSpecification.instance;

private PredefinedType_? : IfcCableCarrierFittingTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCableCarrierFittingTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCableCarrierFittingType';

    public readonly required: ReadonlyArray< string > = [ 'IfcCableCarrierFittingType', 'IfcFlowFittingType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCableCarrierFittingTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCableCarrierFittingTypeSpecification = new IfcCableCarrierFittingTypeSpecification();
}
