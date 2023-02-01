
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCurveStyle from "./IfcCurveStyle.bldrs"
import IfcOneDirectionRepeatFactor from "./IfcOneDirectionRepeatFactor.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"
import IfcCartesianPoint from "./IfcCartesianPoint.bldrs"
import IfcPlaneAngleMeasure from "./IfcPlaneAngleMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfillareastylehatching.htm
 */
export default  class IfcFillAreaStyleHatching extends IfcGeometricRepresentationItem 
{    
    public readonly specification: IfcFillAreaStyleHatchingSpecification = IfcFillAreaStyleHatchingSpecification.instance;

private HatchLineAppearance_? : IfcCurveStyle
    private StartOfNextHatchLine_? : IfcOneDirectionRepeatFactor|IfcPositiveLengthMeasure
    private PointOfReferenceHatchLine_? : IfcCartesianPoint
    private PatternStart_? : IfcCartesianPoint
    private HatchLineAngle_? : IfcPlaneAngleMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcFillAreaStyleHatchingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcFillAreaStyleHatching';

    public readonly required: ReadonlyArray< string > = [ 'IfcFillAreaStyleHatching', 'IfcGeometricRepresentationItem', 'IfcRepresentationItem' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'HatchLineAppearance',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurveStyle',
			optional: false
		}, 
		{
			name: 'StartOfNextHatchLine',
			isCollection: false,
			rank: 0,
			baseType: 'IfcOneDirectionRepeatFactor|IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'PointOfReferenceHatchLine',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianPoint',
			optional: true
		}, 
		{
			name: 'PatternStart',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCartesianPoint',
			optional: true
		}, 
		{
			name: 'HatchLineAngle',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPlaneAngleMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcFillAreaStyleHatchingSpecification = new IfcFillAreaStyleHatchingSpecification();
}
