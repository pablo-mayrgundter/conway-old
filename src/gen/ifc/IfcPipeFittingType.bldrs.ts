
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPipeFittingTypeEnum from "./IfcPipeFittingTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpipefittingtype.htm
 */
export default  class IfcPipeFittingType extends IfcFlowFittingType 
{    
    public readonly specification: IfcPipeFittingTypeSpecification = IfcPipeFittingTypeSpecification.instance;

private PredefinedType_? : IfcPipeFittingTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPipeFittingTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPipeFittingType';

    public readonly required: ReadonlyArray< string > = [ 'IfcPipeFittingType', 'IfcFlowFittingType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPipeFittingTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPipeFittingTypeSpecification = new IfcPipeFittingTypeSpecification();
}
