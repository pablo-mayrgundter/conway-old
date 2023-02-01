
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccranerailfshapeprofiledef.htm
 */
export default  class IfcCraneRailFShapeProfileDef extends IfcParameterizedProfileDef 
{    
    public readonly specification: IfcCraneRailFShapeProfileDefSpecification = IfcCraneRailFShapeProfileDefSpecification.instance;

private OverallHeight_? : IfcPositiveLengthMeasure
    private HeadWidth_? : IfcPositiveLengthMeasure
    private Radius_? : IfcPositiveLengthMeasure
    private HeadDepth2_? : IfcPositiveLengthMeasure
    private HeadDepth3_? : IfcPositiveLengthMeasure
    private WebThickness_? : IfcPositiveLengthMeasure
    private BaseDepth1_? : IfcPositiveLengthMeasure
    private BaseDepth2_? : IfcPositiveLengthMeasure
    private CentreOfGravityInY_? : IfcPositiveLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCraneRailFShapeProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCraneRailFShapeProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcCraneRailFShapeProfileDef', 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'OverallHeight',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'HeadWidth',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'Radius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'HeadDepth2',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'HeadDepth3',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'WebThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'BaseDepth1',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'BaseDepth2',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'CentreOfGravityInY',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCraneRailFShapeProfileDefSpecification = new IfcCraneRailFShapeProfileDefSpecification();
}
