
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcStructuralLoad from "./IfcStructuralLoad.bldrs"
import IfcGlobalOrLocalEnum from "./IfcGlobalOrLocalEnum.bldrs"
import IfcRelConnectsStructuralActivity from "./IfcRelConnectsStructuralActivity.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralactivity.htm
 */
export default abstract class IfcStructuralActivity extends IfcProduct 
{    
    public readonly specification: IfcStructuralActivitySpecification = IfcStructuralActivitySpecification.instance;

private AppliedLoad_? : IfcStructuralLoad
    private GlobalOrLocal_? : IfcGlobalOrLocalEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcStructuralActivitySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcStructuralActivity';

    public readonly required: ReadonlyArray< string > = [ 'IfcStructuralActivity', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'AppliedLoad',
			isCollection: false,
			rank: 0,
			baseType: 'IfcStructuralLoad',
			optional: false
		}, 
		{
			name: 'GlobalOrLocal',
			isCollection: false,
			rank: 0,
			baseType: 'IfcGlobalOrLocalEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcStructuralActivitySpecification = new IfcStructuralActivitySpecification();
}
