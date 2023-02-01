
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcBoundedCurve from "./IfcBoundedCurve.bldrs"
import IfcEdgeCurve from "./IfcEdgeCurve.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectioncurvegeometry.htm
 */
export default  class IfcConnectionCurveGeometry extends IfcConnectionGeometry 
{    
    public readonly specification: IfcConnectionCurveGeometrySpecification = IfcConnectionCurveGeometrySpecification.instance;

private CurveOnRelatingElement_? : IfcBoundedCurve|IfcEdgeCurve
    private CurveOnRelatedElement_? : IfcBoundedCurve|IfcEdgeCurve

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcConnectionCurveGeometrySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcConnectionCurveGeometry';

    public readonly required: ReadonlyArray< string > = [ 'IfcConnectionCurveGeometry', 'IfcConnectionGeometry' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'CurveOnRelatingElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoundedCurve|IfcEdgeCurve',
			optional: false
		}, 
		{
			name: 'CurveOnRelatedElement',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoundedCurve|IfcEdgeCurve',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcConnectionCurveGeometrySpecification = new IfcConnectionCurveGeometrySpecification();
}
