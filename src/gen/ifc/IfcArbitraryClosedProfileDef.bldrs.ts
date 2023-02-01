
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCurve from "./IfcCurve.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarbitraryclosedprofiledef.htm
 */
export default  class IfcArbitraryClosedProfileDef extends IfcProfileDef 
{    
    public readonly specification: IfcArbitraryClosedProfileDefSpecification = IfcArbitraryClosedProfileDefSpecification.instance;

private OuterCurve_? : IfcCurve

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcArbitraryClosedProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcArbitraryClosedProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcArbitraryClosedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'OuterCurve',
			isCollection: false,
			rank: 0,
			baseType: 'IfcCurve',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcArbitraryClosedProfileDefSpecification = new IfcArbitraryClosedProfileDefSpecification();
}
