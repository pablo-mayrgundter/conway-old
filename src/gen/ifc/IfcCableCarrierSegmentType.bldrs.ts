
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCableCarrierSegmentTypeEnum from "./IfcCableCarrierSegmentTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccablecarriersegmenttype.htm
 */
export default  class IfcCableCarrierSegmentType extends IfcFlowSegmentType 
{    
    public readonly specification: IfcCableCarrierSegmentTypeSpecification = IfcCableCarrierSegmentTypeSpecification.instance;

private PredefinedType_? : IfcCableCarrierSegmentTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCableCarrierSegmentTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCableCarrierSegmentType';

    public readonly required: ReadonlyArray< string > = [ 'IfcCableCarrierSegmentType', 'IfcFlowSegmentType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCableCarrierSegmentTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCableCarrierSegmentTypeSpecification = new IfcCableCarrierSegmentTypeSpecification();
}
