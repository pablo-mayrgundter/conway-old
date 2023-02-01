
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectanglehollowprofiledef.htm
 */
export default  class IfcRectangleHollowProfileDef extends IfcRectangleProfileDef 
{    
    public readonly specification: IfcRectangleHollowProfileDefSpecification = IfcRectangleHollowProfileDefSpecification.instance;

private WallThickness_? : IfcPositiveLengthMeasure
    private InnerFilletRadius_? : IfcPositiveLengthMeasure
    private OuterFilletRadius_? : IfcPositiveLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRectangleHollowProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRectangleHollowProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcRectangleHollowProfileDef', 'IfcRectangleProfileDef', 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'WallThickness',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'InnerFilletRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}, 
		{
			name: 'OuterFilletRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRectangleHollowProfileDefSpecification = new IfcRectangleHollowProfileDefSpecification();
}
