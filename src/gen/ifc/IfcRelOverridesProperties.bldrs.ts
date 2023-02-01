
import Component from "../../core/component"
import ComponentSpecification from "../../core/component_specification"
import AttributeSpecification from "../../core/attribute_specification"
import SchemaSpecificationIFC from "./schema_ifc.bldrs"
import { IFCSchema } from "./schema_ifc.bldrs"
import IfcProperty from "./IfcProperty.bldrs"


/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreloverridesproperties.htm
 */
export default  class IfcRelOverridesProperties extends IfcRelDefinesByProperties 
{    
    public readonly specification: IfcRelOverridesPropertiesSpecification = IfcRelOverridesPropertiesSpecification.instance;

private OverridingProperties_? : Array<IfcProperty>

    constructor( buffer: SnapshotBuffer< T >, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( fileIDProvider: () => number, dirtyProvider?: ( entity: Entity< T > ) => void )
    constructor( bufferOrFileIDProvider: SnapshotBuffer< T > | ( () => number ), private readonly dirtyProvider_?: ( entity: Entity< T > ) => void ) 
    {
        super( bufferOrFileIDProvider, dirtyProvider_ );
    }

}

export class IfcRelOverridesPropertiesSpecification implements ComponentSpecification
{
    public readonly name: string = 'IfcRelOverridesProperties';

    public readonly required: ReadonlyArray< string > = [ 'IfcRelOverridesProperties', 'IfcRelDefinesByProperties', 'IfcRelDefines', 'IfcRelationship', 'IfcRoot' ];

    public readonly isAbstract: boolean = false;

    public readonly attributes: ReadonlyArray< AttributeSpecification > = 
    [
		{
			name: 'OverridingProperties',
			isCollection: true,
			rank: 1,
			baseType: 'Array<IfcProperty>',
			optional: false
		}
    ];

    public readonly schema: IFCSchema = 'IFC';

    public static readonly instance: IfcRelOverridesPropertiesSpecification = new IfcRelOverridesPropertiesSpecification();
}
