
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectangleprofiledef.htm
 */
export default  class IfcRectangleProfileDef extends IfcParameterizedProfileDef 
{    
    public readonly specification: IfcRectangleProfileDefSpecification = IfcRectangleProfileDefSpecification.instance;

private XDim_? : IfcPositiveLengthMeasure
    private YDim_? : IfcPositiveLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRectangleProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRectangleProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcRectangleProfileDef', 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'XDim',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}, 
		{
			name: 'YDim',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRectangleProfileDefSpecification = new IfcRectangleProfileDefSpecification();
}
