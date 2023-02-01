
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcBoundedCurve from "./IfcBoundedCurve.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarbitraryopenprofiledef.htm
 */
export default  class IfcArbitraryOpenProfileDef extends IfcProfileDef 
{    
    public readonly specification: IfcArbitraryOpenProfileDefSpecification = IfcArbitraryOpenProfileDefSpecification.instance;

private Curve_? : IfcBoundedCurve

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcArbitraryOpenProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcArbitraryOpenProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcArbitraryOpenProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Curve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcBoundedCurve',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcArbitraryOpenProfileDefSpecification = new IfcArbitraryOpenProfileDefSpecification();
}
