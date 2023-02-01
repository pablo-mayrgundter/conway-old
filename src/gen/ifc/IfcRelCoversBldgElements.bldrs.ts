
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcElement from "./IfcElement.bldrs"
import IfcCovering from "./IfcCovering.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelcoversbldgelements.htm
 */
export default  class IfcRelCoversBldgElements extends IfcRelConnects 
{    
    public readonly specification: IfcRelCoversBldgElementsSpecification = IfcRelCoversBldgElementsSpecification.instance;

private RelatingBuildingElement_? : IfcElement
    private RelatedCoverings_? : Array<IfcCovering>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelCoversBldgElementsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelCoversBldgElements';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelCoversBldgElements', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingBuildingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement',
			optional: false
		}, 
		{
			name: 'RelatedCoverings',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCovering>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelCoversBldgElementsSpecification = new IfcRelCoversBldgElementsSpecification();
}
