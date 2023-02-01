
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrationalbeziercurve.htm
 */
export default  class IfcRationalBezierCurve extends IfcBezierCurve 
{    
    public readonly specification: IfcRationalBezierCurveSpecification = IfcRationalBezierCurveSpecification.instance;

private WeightsData_? : Array<number>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRationalBezierCurveSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRationalBezierCurve';

    public readonly required: ReadonlyArray< string > = [ 'IfcRationalBezierCurve', 'IfcBezierCurve', 'IfcBSplineCurve', 'IfcBoundedCurve', 'IfcCurve', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'WeightsData',
			isCollection: true,
			rank: 1,
			baseType: 'Array<number>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRationalBezierCurveSpecification = new IfcRationalBezierCurveSpecification();
}
