
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcDirection from "./IfcDirection.bldrs"
import IfcGeometricRepresentationSubContext from "./IfcGeometricRepresentationSubContext.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricrepresentationcontext.htm
 */
export default  class IfcGeometricRepresentationContext extends IfcRepresentationContext 
{    
    public readonly specification: IfcGeometricRepresentationContextSpecification = IfcGeometricRepresentationContextSpecification.instance;

private CoordinateSpaceDimension_? : IfcDimensionCount
    private Precision_? : number
    private WorldCoordinateSystem_? : IfcAxis2Placement2D|IfcAxis2Placement3D
    private TrueNorth_? : IfcDirection

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcGeometricRepresentationContextSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGeometricRepresentationContext';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationContext', 'IfcRepresentationContext' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'CoordinateSpaceDimension',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDimensionCount',
			optional: false
		}, 
		{
			name: 'Precision',
			isCollection: false,
			rank: 0,
			baseType: 'number',
			optional: true
		}, 
		{
			name: 'WorldCoordinateSystem',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAxis2Placement2D|IfcAxis2Placement3D',
			optional: false
		}, 
		{
			name: 'TrueNorth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcDirection',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcGeometricRepresentationContextSpecification = new IfcGeometricRepresentationContextSpecification();
}
