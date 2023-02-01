
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcRepresentation from "./IfcRepresentation.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproductrepresentation.htm
 */
export default  class IfcProductRepresentation extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcProductRepresentationSpecification = IfcProductRepresentationSpecification.instance;

private Name_? : IfcLabel
    private Description_? : IfcText
    private Representations_? : Array<IfcRepresentation>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcProductRepresentationSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProductRepresentation';

    public readonly required: ReadonlyArray< string > = [ 'IfcProductRepresentation' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}, 
		{
			name: 'Representations',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcRepresentation>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProductRepresentationSpecification = new IfcProductRepresentationSpecification();
}
