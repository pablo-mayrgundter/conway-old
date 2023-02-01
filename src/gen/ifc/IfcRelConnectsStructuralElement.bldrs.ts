
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcElement from "./IfcElement.bldrs"
import IfcStructuralMember from "./IfcStructuralMember.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsstructuralelement.htm
 */
export default  class IfcRelConnectsStructuralElement extends IfcRelConnects 
{    
    public readonly specification: IfcRelConnectsStructuralElementSpecification = IfcRelConnectsStructuralElementSpecification.instance;

private RelatingElement_? : IfcElement
    private RelatedStructuralMember_? : IfcStructuralMember

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelConnectsStructuralElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnectsStructuralElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelConnectsStructuralElement', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement',
			optional: false
		}, 
		{
			name: 'RelatedStructuralMember',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralMember',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelConnectsStructuralElementSpecification = new IfcRelConnectsStructuralElementSpecification();
}
