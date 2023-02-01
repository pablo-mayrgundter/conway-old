
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPipeSegmentTypeEnum from "./IfcPipeSegmentTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpipesegmenttype.htm
 */
export default  class IfcPipeSegmentType extends IfcFlowSegmentType 
{    
    public readonly specification: IfcPipeSegmentTypeSpecification = IfcPipeSegmentTypeSpecification.instance;

private PredefinedType_? : IfcPipeSegmentTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPipeSegmentTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPipeSegmentType';

    public readonly required: ReadonlyArray< string > = [ 'IfcPipeSegmentType', 'IfcFlowSegmentType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPipeSegmentTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPipeSegmentTypeSpecification = new IfcPipeSegmentTypeSpecification();
}
