
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcPositiveLengthMeasure from "./IfcPositiveLengthMeasure.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcroundedrectangleprofiledef.htm
 */
export default  class IfcRoundedRectangleProfileDef extends IfcRectangleProfileDef 
{    
    public readonly specification: IfcRoundedRectangleProfileDefSpecification = IfcRoundedRectangleProfileDefSpecification.instance;

private RoundingRadius_? : IfcPositiveLengthMeasure

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRoundedRectangleProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRoundedRectangleProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcRoundedRectangleProfileDef', 'IfcRectangleProfileDef', 'IfcParameterizedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'RoundingRadius',
			isCollection: false,
			rank: 0,
			baseType: 'IfcPositiveLengthMeasure',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRoundedRectangleProfileDefSpecification = new IfcRoundedRectangleProfileDefSpecification();
}
