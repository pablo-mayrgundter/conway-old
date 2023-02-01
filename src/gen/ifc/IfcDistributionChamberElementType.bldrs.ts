
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDistributionChamberElementTypeEnum from "./IfcDistributionChamberElementTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributionchamberelementtype.htm
 */
export default  class IfcDistributionChamberElementType extends IfcDistributionFlowElementType 
{    
    public readonly specification: IfcDistributionChamberElementTypeSpecification = IfcDistributionChamberElementTypeSpecification.instance;

private PredefinedType_? : IfcDistributionChamberElementTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDistributionChamberElementTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDistributionChamberElementType';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionChamberElementType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDistributionChamberElementTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDistributionChamberElementTypeSpecification = new IfcDistributionChamberElementTypeSpecification();
}
