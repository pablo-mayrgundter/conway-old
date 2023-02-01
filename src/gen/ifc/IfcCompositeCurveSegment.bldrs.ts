
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcTransitionCode from "./IfcTransitionCode.bldrs"
import IfcCurve from "./IfcCurve.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"
import IfcCompositeCurve from "./IfcCompositeCurve.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositecurvesegment.htm
 */
export default  class IfcCompositeCurveSegment extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcCompositeCurveSegmentSpecification = IfcCompositeCurveSegmentSpecification.instance;

private Transition_? : IfcTransitionCode
    private SameSense_? : boolean
    private ParentCurve_? : IfcCurve

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCompositeCurveSegmentSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCompositeCurveSegment';

    public readonly required: ReadonlyArray< string > = [ 'IfcCompositeCurveSegment', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Transition',
			isCollection: false,
			rank: 0,
			baseType: 'IfcTransitionCode',
			optional: false
		}, 
		{
			name: 'SameSense',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}, 
		{
			name: 'ParentCurve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCompositeCurveSegmentSpecification = new IfcCompositeCurveSegmentSpecification();
}
