
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcPhysicalComplexQuantity from "./IfcPhysicalComplexQuantity.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcphysicalquantity.htm
 */
export default abstract class IfcPhysicalQuantity extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcPhysicalQuantitySpecification = IfcPhysicalQuantitySpecification.instance;

private Name_? : IfcLabel
    private Description_? : IfcText

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPhysicalQuantitySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPhysicalQuantity';

    public readonly required: ReadonlyArray< string > = [ 'IfcPhysicalQuantity' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: false
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPhysicalQuantitySpecification = new IfcPhysicalQuantitySpecification();
}
