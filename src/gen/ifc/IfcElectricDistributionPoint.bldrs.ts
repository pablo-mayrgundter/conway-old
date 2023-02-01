
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcElectricDistributionPointFunctionEnum from "./IfcElectricDistributionPointFunctionEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelectricdistributionpoint.htm
 */
export default  class IfcElectricDistributionPoint extends IfcFlowController 
{    
    public readonly specification: IfcElectricDistributionPointSpecification = IfcElectricDistributionPointSpecification.instance;

private DistributionPointFunction_? : IfcElectricDistributionPointFunctionEnum
    private UserDefinedFunction_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcElectricDistributionPointSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElectricDistributionPoint';

    public readonly required: ReadonlyArray< string > = [ 'IfcElectricDistributionPoint', 'IfcFlowController', 'IfcDistributionFlowElement', 'IfcDistributionElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'DistributionPointFunction',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElectricDistributionPointFunctionEnum',
			optional: false
		}, 
		{
			name: 'UserDefinedFunction',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcElectricDistributionPointSpecification = new IfcElectricDistributionPointSpecification();
}
