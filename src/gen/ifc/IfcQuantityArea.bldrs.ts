
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAreaMeasure from "./IfcAreaMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantityarea.htm
 */
export default  class IfcQuantityArea extends IfcPhysicalSimpleQuantity 
{    
    public readonly specification: IfcQuantityAreaSpecification = IfcQuantityAreaSpecification.instance;

private AreaValue_? : IfcAreaMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcQuantityAreaSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcQuantityArea';

    public readonly required: ReadonlyArray< string > = [ 'IfcQuantityArea', 'IfcPhysicalSimpleQuantity', 'IfcPhysicalQuantity' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'AreaValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAreaMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcQuantityAreaSpecification = new IfcQuantityAreaSpecification();
}
