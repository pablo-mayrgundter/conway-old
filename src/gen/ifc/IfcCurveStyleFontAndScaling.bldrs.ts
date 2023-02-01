
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcPreDefinedCurveFont from "./IfcPreDefinedCurveFont.bldrs"
import IfcCurveStyleFont from "./IfcCurveStyleFont.bldrs"
import IfcPositiveRatioMeasure from "./IfcPositiveRatioMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestylefontandscaling.htm
 */
export default  class IfcCurveStyleFontAndScaling extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcCurveStyleFontAndScalingSpecification = IfcCurveStyleFontAndScalingSpecification.instance;

private Name_? : IfcLabel
    private CurveFont_? : IfcPreDefinedCurveFont|IfcCurveStyleFont
    private CurveFontScaling_? : IfcPositiveRatioMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCurveStyleFontAndScalingSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCurveStyleFontAndScaling';

    public readonly required: ReadonlyArray< string > = [ 'IfcCurveStyleFontAndScaling' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Name',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}, 
		{
			name: 'CurveFont',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPreDefinedCurveFont|IfcCurveStyleFont',
			optional: false
		}, 
		{
			name: 'CurveFontScaling',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveRatioMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCurveStyleFontAndScalingSpecification = new IfcCurveStyleFontAndScalingSpecification();
}
