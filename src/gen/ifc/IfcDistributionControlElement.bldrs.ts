
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcRelFlowControlElements from "./IfcRelFlowControlElements.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributioncontrolelement.htm
 */
export default  class IfcDistributionControlElement extends IfcDistributionElement 
{    
    public readonly specification: IfcDistributionControlElementSpecification = IfcDistributionControlElementSpecification.instance;

private ControlElementId_? : IfcIdentifier

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcDistributionControlElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcDistributionControlElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcDistributionControlElement', 'IfcDistributionElement', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ControlElementId',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcDistributionControlElementSpecification = new IfcDistributionControlElementSpecification();
}
