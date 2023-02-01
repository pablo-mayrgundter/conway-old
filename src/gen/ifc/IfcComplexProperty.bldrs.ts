
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcIdentifier from "./IfcIdentifier.bldrs"
import IfcProperty from "./IfcProperty.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccomplexproperty.htm
 */
export default  class IfcComplexProperty extends IfcProperty 
{    
    public readonly specification: IfcComplexPropertySpecification = IfcComplexPropertySpecification.instance;

private UsageName_? : IfcIdentifier
    private HasProperties_? : Array<IfcProperty>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcComplexPropertySpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcComplexProperty';

    public readonly required: ReadonlyArray< string > = [ 'IfcComplexProperty', 'IfcProperty' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'UsageName',
			isCollection: false,
			rank: 0,
			baseType: 'IfcIdentifier',
			optional: false
		}, 
		{
			name: 'HasProperties',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcProperty>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcComplexPropertySpecification = new IfcComplexPropertySpecification();
}
