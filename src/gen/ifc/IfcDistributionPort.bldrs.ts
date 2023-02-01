
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcFlowDirectionEnum from "./IfcFlowDirectionEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributionport.htm
 */
export default  class IfcDistributionPort extends IfcPort 
{    
    public readonly specification: IfcDistributionPortSpecification = IfcDistributionPortSpecification.instance;

private FlowDirection_? : IfcFlowDirectionEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDistributionPortSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDistributionPort';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionPort', 'IfcPort', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'FlowDirection',
			isCollection: false,
			rank: 0,
			baseType: 'IfcFlowDirectionEnum',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDistributionPortSpecification = new IfcDistributionPortSpecification();
}
