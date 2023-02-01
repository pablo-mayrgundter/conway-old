
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcBSplineCurveForm from "./IfcBSplineCurveForm.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbsplinecurve.htm
 */
export default abstract class IfcBSplineCurve extends IfcBoundedCurve 
{    
    public readonly specification: IfcBSplineCurveSpecification = IfcBSplineCurveSpecification.instance;

private Degree_? : number
    private ControlPointsList_? : Array<IfcCartesianPoint>
    private CurveForm_? : IfcBSplineCurveForm
    private ClosedCurve_? : boolean
    private SelfIntersect_? : boolean

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcBSplineCurveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcBSplineCurve';

    public readonly required: ReadonlyArray< string > = [ 'IfcBSplineCurve', 'IfcBoundedCurve', 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Degree',
			isCollection: false,
			rank: 0,
			baseType: 'number',
			optional: false
		}, 
		{
			name: 'ControlPointsList',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCartesianPoint>',
			optional: false
		}, 
		{
			name: 'CurveForm',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBSplineCurveForm',
			optional: false
		}, 
		{
			name: 'ClosedCurve',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
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

    public static readonly instance: IfcBSplineCurveSpecification = new IfcBSplineCurveSpecification();
}
