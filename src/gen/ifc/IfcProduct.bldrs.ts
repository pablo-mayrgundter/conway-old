
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcObjectPlacement from "./IfcObjectPlacement.bldrs"
import IfcProductRepresentation from "./IfcProductRepresentation.bldrs"
import IfcRelAssignsToProduct from "./IfcRelAssignsToProduct.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproduct.htm
 */
export default abstract class IfcProduct extends IfcObject 
{    
    public readonly specification: IfcProductSpecification = IfcProductSpecification.instance;

private ObjectPlacement_? : IfcObjectPlacement
    private Representation_? : IfcProductRepresentation

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcProductSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProduct';

    public readonly required: ReadonlyArray< string > = [ 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ObjectPlacement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcObjectPlacement',
			optional: true
		}, 
		{
			name: 'Representation',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProductRepresentation',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProductSpecification = new IfcProductSpecification();
}
