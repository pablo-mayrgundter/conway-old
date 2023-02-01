
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcBoundedCurve from "./IfcBoundedCurve.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolygonalboundedhalfspace.htm
 */
export default  class IfcPolygonalBoundedHalfSpace extends IfcHalfSpaceSolid 
{    
    public readonly specification: IfcPolygonalBoundedHalfSpaceSpecification = IfcPolygonalBoundedHalfSpaceSpecification.instance;

private Position_? : IfcAxis2Placement3D
    private PolygonalBoundary_? : IfcBoundedCurve

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPolygonalBoundedHalfSpaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPolygonalBoundedHalfSpace';

    public readonly required: ReadonlyArray< string > = [ 'IfcPolygonalBoundedHalfSpace', 'IfcHalfSpaceSolid', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Position',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement3D',
			optional: false
		}, 
		{
			name: 'PolygonalBoundary',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoundedCurve',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPolygonalBoundedHalfSpaceSpecification = new IfcPolygonalBoundedHalfSpaceSpecification();
}
