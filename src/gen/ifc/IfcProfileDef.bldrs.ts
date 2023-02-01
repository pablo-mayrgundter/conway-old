
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProfileTypeEnum from "./IfcProfileTypeEnum.bldrs"
import IfcLabel from "./IfcLabel.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprofiledef.htm
 */
export default abstract class IfcProfileDef extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcProfileDefSpecification = IfcProfileDefSpecification.instance;

private ProfileType_? : IfcProfileTypeEnum
    private ProfileName_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcProfileDefSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcProfileDef';

    public readonly required: ReadonlyArray< string > = [ 'IfcProfileDef' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'ProfileType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcProfileTypeEnum',
			optional: false
		}, 
		{
			name: 'ProfileName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcProfileDefSpecification = new IfcProfileDefSpecification();
}
