
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcMassMeasure from "./IfcMassMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantityweight.htm
 */
export default  class IfcQuantityWeight extends IfcPhysicalSimpleQuantity 
{    
    public readonly specification: IfcQuantityWeightSpecification = IfcQuantityWeightSpecification.instance;

private WeightValue_? : IfcMassMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcQuantityWeightSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcQuantityWeight';

    public readonly required: ReadonlyArray< string > = [ 'IfcQuantityWeight', 'IfcPhysicalSimpleQuantity', 'IfcPhysicalQuantity' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'WeightValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcMassMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcQuantityWeightSpecification = new IfcQuantityWeightSpecification();
}
