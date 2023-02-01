
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcElement from "./IfcElement.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectswithrealizingelements.htm
 */
export default  class IfcRelConnectsWithRealizingElements extends IfcRelConnectsElements 
{    
    public readonly specification: IfcRelConnectsWithRealizingElementsSpecification = IfcRelConnectsWithRealizingElementsSpecification.instance;

private RealizingElements_? : Array<IfcElement>
    private ConnectionType_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelConnectsWithRealizingElementsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnectsWithRealizingElements';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelConnectsWithRealizingElements', 'IfcRelConnectsElements', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RealizingElements',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcElement>',
			optional: false
		}, 
		{
			name: 'ConnectionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelConnectsWithRealizingElementsSpecification = new IfcRelConnectsWithRealizingElementsSpecification();
}
