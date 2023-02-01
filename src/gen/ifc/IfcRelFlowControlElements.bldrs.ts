
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDistributionControlElement from "./IfcDistributionControlElement.bldrs"
import IfcDistributionFlowElement from "./IfcDistributionFlowElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelflowcontrolelements.htm
 */
export default  class IfcRelFlowControlElements extends IfcRelConnects 
{    
    public readonly specification: IfcRelFlowControlElementsSpecification = IfcRelFlowControlElementsSpecification.instance;

private RelatedControlElements_? : Array<IfcDistributionControlElement>
    private RelatingFlowElement_? : IfcDistributionFlowElement

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelFlowControlElementsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelFlowControlElements';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelFlowControlElements', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatedControlElements',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcDistributionControlElement>',
			optional: false
		}, 
		{
			name: 'RelatingFlowElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDistributionFlowElement',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelFlowControlElementsSpecification = new IfcRelFlowControlElementsSpecification();
}
