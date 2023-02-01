
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPort from "./IfcPort.bldrs"
import IfcElement from "./IfcElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsports.htm
 */
export default  class IfcRelConnectsPorts extends IfcRelConnects 
{    
    public readonly specification: IfcRelConnectsPortsSpecification = IfcRelConnectsPortsSpecification.instance;

private RelatingPort_? : IfcPort
    private RelatedPort_? : IfcPort
    private RealizingElement_? : IfcElement

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelConnectsPortsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnectsPorts';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelConnectsPorts', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

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
			name: 'RelatedPort',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPort',
			optional: false
		}, 
		{
			name: 'RealizingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelConnectsPortsSpecification = new IfcRelConnectsPortsSpecification();
}
