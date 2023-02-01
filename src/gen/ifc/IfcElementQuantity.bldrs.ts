
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcPhysicalQuantity from "./IfcPhysicalQuantity.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementquantity.htm
 */
export default  class IfcElementQuantity extends IfcPropertySetDefinition 
{    
    public readonly specification: IfcElementQuantitySpecification = IfcElementQuantitySpecification.instance;

private MethodOfMeasurement_? : IfcLabel
    private Quantities_? : Array<IfcPhysicalQuantity>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcElementQuantitySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElementQuantity';

    public readonly required: ReadonlyArray< string > = [ 'IfcElementQuantity', 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'MethodOfMeasurement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'Quantities',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcPhysicalQuantity>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcElementQuantitySpecification = new IfcElementQuantitySpecification();
}
