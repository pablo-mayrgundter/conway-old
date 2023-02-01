
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTimeMeasure from "./IfcTimeMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantitytime.htm
 */
export default  class IfcQuantityTime extends IfcPhysicalSimpleQuantity 
{    
    public readonly specification: IfcQuantityTimeSpecification = IfcQuantityTimeSpecification.instance;

private TimeValue_? : IfcTimeMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcQuantityTimeSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcQuantityTime';

    public readonly required: ReadonlyArray< string > = [ 'IfcQuantityTime', 'IfcPhysicalSimpleQuantity', 'IfcPhysicalQuantity' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'TimeValue',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTimeMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcQuantityTimeSpecification = new IfcQuantityTimeSpecification();
}
