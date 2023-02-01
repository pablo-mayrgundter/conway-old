
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPlane from "./IfcPlane.bldrs"
import IfcCurve from "./IfcCurve.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurveboundedplane.htm
 */
export default  class IfcCurveBoundedPlane extends IfcBoundedSurface 
{    
    public readonly specification: IfcCurveBoundedPlaneSpecification = IfcCurveBoundedPlaneSpecification.instance;

private BasisSurface_? : IfcPlane
    private OuterBoundary_? : IfcCurve
    private InnerBoundaries_? : Array<IfcCurve>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCurveBoundedPlaneSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCurveBoundedPlane';

    public readonly required: ReadonlyArray< string > = [ 'IfcCurveBoundedPlane', 'IfcBoundedSurface', 'IfcSurface', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'BasisSurface',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlane',
			optional: false
		}, 
		{
			name: 'OuterBoundary',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve',
			optional: false
		}, 
		{
			name: 'InnerBoundaries',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCurve>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCurveBoundedPlaneSpecification = new IfcCurveBoundedPlaneSpecification();
}
