
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcConnectionGeometry from "./IfcConnectionGeometry.bldrs"
import IfcElement from "./IfcElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectselements.htm
 */
export default  class IfcRelConnectsElements extends IfcRelConnects 
{    
    public readonly specification: IfcRelConnectsElementsSpecification = IfcRelConnectsElementsSpecification.instance;

private ConnectionGeometry_? : IfcConnectionGeometry
    private RelatingElement_? : IfcElement
    private RelatedElement_? : IfcElement

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelConnectsElementsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnectsElements';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelConnectsElements', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ConnectionGeometry',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConnectionGeometry',
			optional: true
		}, 
		{
			name: 'RelatingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement',
			optional: false
		}, 
		{
			name: 'RelatedElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelConnectsElementsSpecification = new IfcRelConnectsElementsSpecification();
}
