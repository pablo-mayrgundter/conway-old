
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProfileDef from "./IfcProfileDef.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccompositeprofiledef.htm
 */
export default  class IfcCompositeProfileDef extends IfcProfileDef 
{    
    public readonly specification: IfcCompositeProfileDefSpecification = IfcCompositeProfileDefSpecification.instance;

private Profiles_? : Array<IfcProfileDef>
    private Label_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcCompositeProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcCompositeProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcCompositeProfileDef', 'IfcProfileDef' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Profiles',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcProfileDef>',
			optional: false
		}, 
		{
			name: 'Label',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcCompositeProfileDefSpecification = new IfcCompositeProfileDefSpecification();
}
