
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcGridAxis from "./IfcGridAxis.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvirtualgridintersection.htm
 */
export default  class IfcVirtualGridIntersection extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcVirtualGridIntersectionSpecification = IfcVirtualGridIntersectionSpecification.instance;

private IntersectingAxes_? : Array<IfcGridAxis>
    private OffsetDistances_? : Array<IfcLengthMeasure>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcVirtualGridIntersectionSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcVirtualGridIntersection';

    public readonly required: ReadonlyArray< string > = [ 'IfcVirtualGridIntersection' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'IntersectingAxes',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcGridAxis>',
			optional: false
		}, 
		{
			name: 'OffsetDistances',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcLengthMeasure>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcVirtualGridIntersectionSpecification = new IfcVirtualGridIntersectionSpecification();
}
