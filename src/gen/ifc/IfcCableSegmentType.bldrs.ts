
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCableSegmentTypeEnum from "./IfcCableSegmentTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccablesegmenttype.htm
 */
export default  class IfcCableSegmentType extends IfcFlowSegmentType 
{    
    public readonly specification: IfcCableSegmentTypeSpecification = IfcCableSegmentTypeSpecification.instance;

private PredefinedType_? : IfcCableSegmentTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCableSegmentTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCableSegmentType';

    public readonly required: ReadonlyArray< string > = [ 'IfcCableSegmentType', 'IfcFlowSegmentType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCableSegmentTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCableSegmentTypeSpecification = new IfcCableSegmentTypeSpecification();
}
