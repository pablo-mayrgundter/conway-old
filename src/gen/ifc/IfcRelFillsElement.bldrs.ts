
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcOpeningElement from "./IfcOpeningElement.bldrs"
import IfcElement from "./IfcElement.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelfillselement.htm
 */
export default  class IfcRelFillsElement extends IfcRelConnects 
{    
    public readonly specification: IfcRelFillsElementSpecification = IfcRelFillsElementSpecification.instance;

private RelatingOpeningElement_? : IfcOpeningElement
    private RelatedBuildingElement_? : IfcElement

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelFillsElementSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelFillsElement';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelFillsElement', 'IfcRelConnects', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingOpeningElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOpeningElement',
			optional: false
		}, 
		{
			name: 'RelatedBuildingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElement',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelFillsElementSpecification = new IfcRelFillsElementSpecification();
}
