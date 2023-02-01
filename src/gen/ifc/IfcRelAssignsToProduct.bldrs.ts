
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProduct from "./IfcProduct.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstoproduct.htm
 */
export default  class IfcRelAssignsToProduct extends IfcRelAssigns 
{    
    public readonly specification: IfcRelAssignsToProductSpecification = IfcRelAssignsToProductSpecification.instance;

private RelatingProduct_? : IfcProduct

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelAssignsToProductSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelAssignsToProduct';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelAssignsToProduct', 'IfcRelAssigns', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RelatingProduct',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProduct',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelAssignsToProductSpecification = new IfcRelAssignsToProductSpecification();
}
