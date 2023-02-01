
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcCurveStyleFontPattern from "./IfcCurveStyleFontPattern.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestylefont.htm
 */
export default  class IfcCurveStyleFont extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcCurveStyleFontSpecification = IfcCurveStyleFontSpecification.instance;

private Name_? : IfcLabel
    private PatternList_? : Array<IfcCurveStyleFontPattern>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCurveStyleFontSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCurveStyleFont';

    public readonly required: ReadonlyArray< string > = [ 'IfcCurveStyleFont' ];

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
			name: 'PatternList',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCurveStyleFontPattern>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCurveStyleFontSpecification = new IfcCurveStyleFontSpecification();
}
