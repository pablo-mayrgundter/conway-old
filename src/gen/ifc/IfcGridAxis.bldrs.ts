
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcCurve from "./IfcCurve.bldrs"
import IfcBoolean from "./IfcBoolean.bldrs"
import IfcGrid from "./IfcGrid.bldrs"
import IfcVirtualGridIntersection from "./IfcVirtualGridIntersection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgridaxis.htm
 */
export default  class IfcGridAxis extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcGridAxisSpecification = IfcGridAxisSpecification.instance;

private AxisTag_? : IfcLabel
    private AxisCurve_? : IfcCurve
    private SameSense_? : IfcBoolean

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcGridAxisSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGridAxis';

    public readonly required: ReadonlyArray< string > = [ 'IfcGridAxis' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'AxisTag',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'AxisCurve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve',
			optional: false
		}, 
		{
			name: 'SameSense',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoolean',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcGridAxisSpecification = new IfcGridAxisSpecification();
}
