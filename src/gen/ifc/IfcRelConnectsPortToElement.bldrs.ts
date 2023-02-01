
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPort from "./IfcPort.bldrs"
import IfcElement from "./IfcElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsporttoelement.htm
 */
export default  class IfcRelConnectsPortToElement extends IfcRelConnects 
{    
    public readonly specification: IfcRelConnectsPortToElementSpecification = IfcRelConnectsPortToElementSpecification.instance;

private RelatingPort_? : IfcPort
    private RelatedElement_? : IfcElement

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelConnectsPortToElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnectsPortToElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelConnectsPortToElement', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingPort',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPort',
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

    public static readonly instance: IfcRelConnectsPortToElementSpecification = new IfcRelConnectsPortToElementSpecification();
}
