
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcAssemblyPlaceEnum from "./IfcAssemblyPlaceEnum.bldrs"
import IfcElementAssemblyTypeEnum from "./IfcElementAssemblyTypeEnum.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementassembly.htm
 */
export default  class IfcElementAssembly extends IfcElement 
{    
    public readonly specification: IfcElementAssemblySpecification = IfcElementAssemblySpecification.instance;

private AssemblyPlace_? : IfcAssemblyPlaceEnum
    private PredefinedType_? : IfcElementAssemblyTypeEnum

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcElementAssemblySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcElementAssembly';

    public readonly required: ReadonlyArray< string > = [ 'IfcElementAssembly', 'IfcElement', 'IfcProduct', 'IfcObject', 'IfcObjectDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'AssemblyPlace',
			isCollection: false,
			rank: 0,
			baseType: 'IfcAssemblyPlaceEnum',
			optional: true
		}, 
		{
			name: 'PredefinedType',
			isCollection: false,
			rank: 0,
			baseType: 'IfcElementAssemblyTypeEnum',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcElementAssemblySpecification = new IfcElementAssemblySpecification();
}
