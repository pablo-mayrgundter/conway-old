
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcFlowMeterTypeEnum from "./IfcFlowMeterTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcflowmetertype.htm
 */
export default  class IfcFlowMeterType extends IfcFlowControllerType 
{    
    public readonly specification: IfcFlowMeterTypeSpecification = IfcFlowMeterTypeSpecification.instance;

private PredefinedType_? : IfcFlowMeterTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcFlowMeterTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFlowMeterType';

    public readonly required: ReadonlyArray< string > = [ 'IfcFlowMeterType', 'IfcFlowControllerType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFlowMeterTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFlowMeterTypeSpecification = new IfcFlowMeterTypeSpecification();
}
