
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcGeometricRepresentationContext from "./IfcGeometricRepresentationContext.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"
import IfcGeometricProjectionEnum from "./IfcGeometricProjectionEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcAxis2Placement2D from "./IfcAxis2Placement2D.bldrs"
import IfcAxis2Placement3D from "./IfcAxis2Placement3D.bldrs"
import IfcDimensionCount from "./IfcDimensionCount.bldrs"
import IfcDirection from "./IfcDirection.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricrepresentationsubcontext.htm
 */
export default  class IfcGeometricRepresentationSubContext extends IfcGeometricRepresentationContext 
{    
    public readonly specification: IfcGeometricRepresentationSubContextSpecification = IfcGeometricRepresentationSubContextSpecification.instance;

private ParentContext_? : IfcGeometricRepresentationContext
    private TargetScale_? : IfcPositiveRatioMeasure
    private TargetView_? : IfcGeometricProjectionEnum
    private UserDefinedTargetView_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcGeometricRepresentationSubContextSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcGeometricRepresentationSubContext';

    public readonly required: ReadonlyArray< string > = [ 'IfcGeometricRepresentationSubContext', 'IfcGeometricRepresentationContext', 'IfcRepresentationContext' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ParentContext',
			isCollection: false,
			rank: 0,
			baseType: 'IfcGeometricRepresentationContext',
			optional: false
		}, 
		{
			name: 'TargetScale',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: true
		}, 
		{
			name: 'TargetView',
			isCollection: false,
			rank: 0,
			baseType: 'IfcGeometricProjectionEnum',
			optional: false
		}, 
		{
			name: 'UserDefinedTargetView',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcGeometricRepresentationSubContextSpecification = new IfcGeometricRepresentationSubContextSpecification();
}
