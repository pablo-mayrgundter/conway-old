
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcJunctionBoxTypeEnum from "./IfcJunctionBoxTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcjunctionboxtype.htm
 */
export default  class IfcJunctionBoxType extends IfcFlowFittingType 
{    
    public readonly specification: IfcJunctionBoxTypeSpecification = IfcJunctionBoxTypeSpecification.instance;

private PredefinedType_? : IfcJunctionBoxTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcJunctionBoxTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcJunctionBoxType';

    public readonly required: ReadonlyArray< string > = [ 'IfcJunctionBoxType', 'IfcFlowFittingType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcJunctionBoxTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcJunctionBoxTypeSpecification = new IfcJunctionBoxTypeSpecification();
}
