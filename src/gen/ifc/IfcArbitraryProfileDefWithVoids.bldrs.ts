
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcCurve from "./IfcCurve.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarbitraryprofiledefwithvoids.htm
 */
export default  class IfcArbitraryProfileDefWithVoids extends IfcArbitraryClosedProfileDef 
{    
    public readonly specification: IfcArbitraryProfileDefWithVoidsSpecification = IfcArbitraryProfileDefWithVoidsSpecification.instance;

private InnerCurves_? : Array<IfcCurve>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcArbitraryProfileDefWithVoidsSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcArbitraryProfileDefWithVoids';

    public readonly required: ReadonlyArray< string > = [ 'IfcArbitraryProfileDefWithVoids', 'IfcArbitraryClosedProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'InnerCurves',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcCurve>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcArbitraryProfileDefWithVoidsSpecification = new IfcArbitraryProfileDefWithVoidsSpecification();
}
