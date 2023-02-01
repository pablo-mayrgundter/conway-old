
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantitylength.htm
 */
export default  class IfcQuantityLength extends IfcPhysicalSimpleQuantity 
{    
    public readonly specification: IfcQuantityLengthSpecification = IfcQuantityLengthSpecification.instance;

private LengthValue_? : IfcLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcQuantityLengthSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcQuantityLength';

    public readonly required: ReadonlyArray< string > = [ 'IfcQuantityLength', 'IfcPhysicalSimpleQuantity', 'IfcPhysicalQuantity' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'LengthValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcQuantityLengthSpecification = new IfcQuantityLengthSpecification();
}
