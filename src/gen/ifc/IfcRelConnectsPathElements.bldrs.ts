
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcConnectionTypeEnum from "./IfcConnectionTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectspathelements.htm
 */
export default  class IfcRelConnectsPathElements extends IfcRelConnectsElements 
{    
    public readonly specification: IfcRelConnectsPathElementsSpecification = IfcRelConnectsPathElementsSpecification.instance;

private RelatingPriorities_? : Array<number>
    private RelatedPriorities_? : Array<number>
    private RelatedConnectionType_? : IfcConnectionTypeEnum
    private RelatingConnectionType_? : IfcConnectionTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelConnectsPathElementsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelConnectsPathElements';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelConnectsPathElements', 'IfcRelConnectsElements', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingPriorities',
			isCollection: true,
			rank: 1,
			baseType: 'Array<number>',
			optional: false
		}, 
		{
			name: 'RelatedPriorities',
			isCollection: true,
			rank: 1,
			baseType: 'Array<number>',
			optional: false
		}, 
		{
			name: 'RelatedConnectionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConnectionTypeEnum',
			optional: false
		}, 
		{
			name: 'RelatingConnectionType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcConnectionTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelConnectsPathElementsSpecification = new IfcRelConnectsPathElementsSpecification();
}
