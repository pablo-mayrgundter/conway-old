
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcFlowInstrumentTypeEnum from "./IfcFlowInstrumentTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowinstrumenttype.htm
 */
export default  class IfcFlowInstrumentType extends IfcDistributionControlElementType 
{    
    public readonly specification: IfcFlowInstrumentTypeSpecification = IfcFlowInstrumentTypeSpecification.instance;

private PredefinedType_? : IfcFlowInstrumentTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcFlowInstrumentTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowInstrumentType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowInstrumentType', 'IfcDistributionControlElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFlowInstrumentTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFlowInstrumentTypeSpecification = new IfcFlowInstrumentTypeSpecification();
}
