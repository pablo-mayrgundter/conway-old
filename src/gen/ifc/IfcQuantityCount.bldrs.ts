
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCountMeasure from "./IfcCountMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantitycount.htm
 */
export default  class IfcQuantityCount extends IfcPhysicalSimpleQuantity 
{    
    public readonly specification: IfcQuantityCountSpecification = IfcQuantityCountSpecification.instance;

private CountValue_? : IfcCountMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcQuantityCountSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcQuantityCount';

    public readonly required: ReadonlyArray< string > = [ 'IfcQuantityCount', 'IfcPhysicalSimpleQuantity', 'IfcPhysicalQuantity' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'CountValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCountMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcQuantityCountSpecification = new IfcQuantityCountSpecification();
}
