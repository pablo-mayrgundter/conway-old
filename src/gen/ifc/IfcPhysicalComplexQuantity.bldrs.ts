
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPhysicalQuantity from "./IfcPhysicalQuantity.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcphysicalcomplexquantity.htm
 */
export default  class IfcPhysicalComplexQuantity extends IfcPhysicalQuantity 
{    
    public readonly specification: IfcPhysicalComplexQuantitySpecification = IfcPhysicalComplexQuantitySpecification.instance;

private HasQuantities_? : Array<IfcPhysicalQuantity>
    private Discrimination_? : IfcLabel
    private Quality_? : IfcLabel
    private Usage_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPhysicalComplexQuantitySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPhysicalComplexQuantity';

    public readonly required: ReadonlyArray< string > = [ 'IfcPhysicalComplexQuantity', 'IfcPhysicalQuantity' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'HasQuantities',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPhysicalQuantity>',
			optional: false
		}, 
		{
			name: 'Discrimination',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}, 
		{
			name: 'Quality',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'Usage',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPhysicalComplexQuantitySpecification = new IfcPhysicalComplexQuantitySpecification();
}
