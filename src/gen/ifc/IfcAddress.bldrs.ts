
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAddressTypeEnum from "./IfcAddressTypeEnum.bldrs"
import IfcText from "./IfcText.bldrs"
import IfcLabel from "./IfcLabel.bldrs"
import IfcPerson from "./IfcPerson.bldrs"
import IfcOrganization from "./IfcOrganization.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcaddress.htm
 */
export default abstract class IfcAddress extends EntityBase< SchemaSpecificationIFC > 
{    
    public readonly specification: IfcAddressSpecification = IfcAddressSpecification.instance;

private Purpose_? : IfcAddressTypeEnum
    private Description_? : IfcText
    private UserDefinedPurpose_? : IfcLabel

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcAddressSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcAddress';

    public readonly required: ReadonlyArray< string > = [ 'IfcAddress' ];

    public readonly isAbstract: boolean = true;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'Purpose',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAddressTypeEnum',
			optional: true
		}, 
		{
			name: 'Description',
			isCollection: false,
			rank: 0,
			baseType: 'IfcText',
			optional: true
		}, 
		{
			name: 'UserDefinedPurpose',
			isCollection: false,
			rank: 0,
			baseType: 'IfcLabel',
			optional: true
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcAddressSpecification = new IfcAddressSpecification();
}
