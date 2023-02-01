
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcElectricApplianceTypeEnum from "./IfcElectricApplianceTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricappliancetype.htm
 */
export default  class IfcElectricApplianceType extends IfcFlowTerminalType 
{    
    public readonly specification: IfcElectricApplianceTypeSpecification = IfcElectricApplianceTypeSpecification.instance;

private PredefinedType_? : IfcElectricApplianceTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcElectricApplianceTypeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElectricApplianceType';

    public readonly required: ReadonlyArray< string > = [ 'IfcElectricApplianceType', 'IfcFlowTerminalType', 'IfcDistributionFlowElementType', 'IfcDistributionElementType', 'IfcElementType', 'IfcTypeProduct', 'IfcTypeObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElectricApplianceTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcElectricApplianceTypeSpecification = new IfcElectricApplianceTypeSpecification();
}
