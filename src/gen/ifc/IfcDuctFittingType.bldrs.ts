
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDuctFittingTypeEnum from "./IfcDuctFittingTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcductfittingtype.htm
 */
export default  class IfcDuctFittingType extends IfcFlowFittingType 
{    
    public readonly specification: IfcDuctFittingTypeSpecification = IfcDuctFittingTypeSpecification.instance;

private PredefinedType_? : IfcDuctFittingTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDuctFittingTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDuctFittingType';

    public readonly required: ReadonlyArray< string > = [ 'IfcDuctFittingType', 'IfcFlowFittingType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDuctFittingTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDuctFittingTypeSpecification = new IfcDuctFittingTypeSpecification();
}
