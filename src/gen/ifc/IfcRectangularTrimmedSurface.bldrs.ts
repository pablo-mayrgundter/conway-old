
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcSurface from "./IfcSurface.bldrs"
import IfcParameterValue from "./IfcParameterValue.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectangulartrimmedsurface.htm
 */
export default  class IfcRectangularTrimmedSurface extends IfcBoundedSurface 
{    
    public readonly specification: IfcRectangularTrimmedSurfaceSpecification = IfcRectangularTrimmedSurfaceSpecification.instance;

private BasisSurface_? : IfcSurface
    private U1_? : IfcParameterValue
    private V1_? : IfcParameterValue
    private U2_? : IfcParameterValue
    private V2_? : IfcParameterValue
    private Usense_? : boolean
    private Vsense_? : boolean

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRectangularTrimmedSurfaceSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRectangularTrimmedSurface';

    public readonly required: ReadonlyArray< string > = [ 'IfcRectangularTrimmedSurface', 'IfcBoundedSurface', 'IfcSurface', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

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
			name: 'U1',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue',
			optional: false
		}, 
		{
			name: 'V1',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue',
			optional: false
		}, 
		{
			name: 'U2',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue',
			optional: false
		}, 
		{
			name: 'V2',
			isCollection: false,
			rank: 0,
			baseType: 'IfcParameterValue',
			optional: false
		}, 
		{
			name: 'Usense',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}, 
		{
			name: 'Vsense',
			isCollection: false,
			rank: 0,
			baseType: 'boolean',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRectangularTrimmedSurfaceSpecification = new IfcRectangularTrimmedSurfaceSpecification();
}
