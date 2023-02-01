
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProperty from "./IfcProperty.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertyset.htm
 */
export default  class IfcPropertySet extends IfcPropertySetDefinition 
{    
    public readonly specification: IfcPropertySetSpecification = IfcPropertySetSpecification.instance;

private HasProperties_? : Array<IfcProperty>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcPropertySetSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcPropertySet';

    public readonly required: ReadonlyArray< string > = [ 'IfcPropertySet', 'IfcPropertySetDefinition', 'IfcPropertyDefinition', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'HasProperties',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcProperty>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcPropertySetSpecification = new IfcPropertySetSpecification();
}
