
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLengthMeasure from "./IfcLengthMeasure.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestylefontpattern.htm
 */
export default  class IfcCurveStyleFontPattern extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcCurveStyleFontPatternSpecification = IfcCurveStyleFontPatternSpecification.instance;

private VisibleSegmentLength_? : IfcLengthMeasure
    private InvisibleSegmentLength_? : IfcPositiveLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCurveStyleFontPatternSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCurveStyleFontPattern';

    public readonly required: ReadonlyArray< string > = [ 'IfcCurveStyleFontPattern' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'VisibleSegmentLength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLengthMeasure',
			optional: false
		}, 
		{
			name: 'InvisibleSegmentLength',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCurveStyleFontPatternSpecification = new IfcCurveStyleFontPatternSpecification();
}
