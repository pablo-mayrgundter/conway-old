
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCompositeCurveSegment from "./IfcCompositeCurveSegment.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositecurve.htm
 */
export default  class IfcCompositeCurve extends IfcBoundedCurve 
{    
    public readonly specification: IfcCompositeCurveSpecification = IfcCompositeCurveSpecification.instance;

private Segments_? : Array<IfcCompositeCurveSegment>
    private SelfIntersect_? : boolean

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCompositeCurveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCompositeCurve';

    public readonly required: ReadonlyArray< string > = [ 'IfcCompositeCurve', 'IfcBoundedCurve', 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Segments',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCompositeCurveSegment>',
			optional: false
		}, 
		{
			name: 'SelfIntersect',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCompositeCurveSpecification = new IfcCompositeCurveSpecification();
}
