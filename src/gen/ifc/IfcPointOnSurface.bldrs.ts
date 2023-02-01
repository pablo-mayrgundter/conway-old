
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSurface from "./IfcSurface.bldrs"
import IfcParameterValue from "./IfcParameterValue.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpointonsurface.htm
 */
export default  class IfcPointOnSurface extends IfcPoint 
{    
    public readonly specification: IfcPointOnSurfaceSpecification = IfcPointOnSurfaceSpecification.instance;

private BasisSurface_? : IfcSurface
    private PointParameterU_? : IfcParameterValue
    private PointParameterV_? : IfcParameterValue

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPointOnSurfaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPointOnSurface';

    public readonly required: ReadonlyArray< string > = [ 'IfcPointOnSurface', 'IfcPoint', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'BasisSurface',
			isCollection: false,
			rank: 0,
			baseType: 'IfcSurface',
			optional: false
		}, 
		{
			name: 'PointParameterU',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue',
			optional: false
		}, 
		{
			name: 'PointParameterV',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPointOnSurfaceSpecification = new IfcPointOnSurfaceSpecification();
}
